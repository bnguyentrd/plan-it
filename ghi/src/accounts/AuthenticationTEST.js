import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useZtoken } from "../zustand_store/store";
let internalToken = null;

export function getToken() {
  return internalToken;
}

export async function getTokenInternal() {
  const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`;
  let data;
  try {
    const response = await fetch(url, {
      credentials: "include",
    });
    if (response.ok) {
      data = await response.json();
      addToken(data.access_token);
      console.log(
        data.access_token,
        "getTokenInternal",
        "RECEIVING TOKEN HERE"
      );
    }
  } catch (e) {}
  return data;
}

function handleErrorMessage(error) {
  if ("error" in error) {
    error = error.error;
    try {
      error = JSON.parse(error);
      if ("__all__" in error) {
        error = error.__all__;
      }
    } catch {}
  }
  if (Array.isArray(error)) {
    error = error.join("<br>");
  } else if (typeof error === "object") {
    error = Object.entries(error).reduce(
      (acc, x) => `${acc}<br>${x[0]}: ${x[1]}`,
      ""
    );
  }
  return error;
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const addToken = useZtoken((state) => state.addToken);
  const removeToken = useZtoken((state) => state.removeToken);
  const token1 = useZtoken((state) => state.token);

  useEffect(() => {
    async function fetchToken() {
      const token = await getTokenInternal();
    }
    if (!token1) {
      fetchToken();
      console.log(token1, "TOKEN1 HAS BEEN FETCHED HERE");
    }
    console.log(token1, "USE EFFECT");
  }, [token1]);

  async function logout() {
    if (token1) {
      const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`;
      await fetch(url, { method: "delete", credentials: "include" });
      internalToken = null;
      console.log(isLoggedIn, "IS LOGGED IN");
      removeToken(null);
      console.log(token1, "THIS IS WHERE WE REMOVED TOKEN");
      navigate("/");
    }
  }

  async function login(username, password) {
    const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`;
    const form = new FormData();
    form.append("username", username);
    form.append("password", password);
    const response = await fetch(url, {
      method: "post",
      credentials: "include",
      body: form,
    });
    if (response.ok) {
      const token = await getTokenInternal();
      addToken(() => token);
      console.log("THIS IS TOKEN1: ", token);
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
      return;
    }
    let error = await response.json();
    return handleErrorMessage(error);
  }

  async function signup(username, password, email) {
    const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/new`;
    const response = await fetch(url, {
      method: "post",
      body: JSON.stringify({
        username,
        password,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await login(username, password);
    }
    return false;
  }

  async function update(username, password, email) {
    const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts`;
    const response = await fetch(url, {
      method: "put",
      body: JSON.stringify({
        username,
        password,
        email,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.access_token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  }

  return (
    <AuthContext.Provider value={{ login, logout, signup, isLoggedIn, token1 }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
