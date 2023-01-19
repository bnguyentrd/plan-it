// 1/19
// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// let internalToken = null;

// export function getToken() {
//   return internalToken;
// }

// export async function getTokenInternal() {
//   // original
//   // const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/me/token/`;
//   const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token/`;
//   // const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/{id}/token/`;
//   // const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/id/token/`;
//   try {
//     const response = await fetch(url, {
//       credentials: "include",
//     });
//     if (response.ok) {
//       const data = await response.json();
//       // internalToken = data.access_token;
//       // return internalToken;
//       return data;
//     }
//   } catch (e) {}
//   return false;
// }

// function handleErrorMessage(error) {
//   if ("error" in error) {
//     error = error.error;
//     try {
//       error = JSON.parse(error);
//       if ("__all__" in error) {
//         error = error.__all__;
//       }
//     } catch {}
//   }
//   if (Array.isArray(error)) {
//     error = error.join("<br>");
//   } else if (typeof error === "object") {
//     error = Object.entries(error).reduce(
//       (acc, x) => `${acc}<br>${x[0]}: ${x[1]}`,
//       ""
//     );
//   }
//   return error;
// }

// export const AuthContext = createContext({
//   token: null,
//   setToken: () => null,
// });

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(null);

//   return (
//     <AuthContext.Provider value={{ token, setToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => useContext(AuthContext);

// export function useToken() {
//   const { token, setToken } = useAuthContext();
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchToken() {
//       const token = await getTokenInternal();
//       setToken(token);
//     }
//     if (!token) {
//       fetchToken();
//     }
//   }, [setToken, token]);

//   // ORIGINAL LOGOUT WORKING on backend. but not frontend
//   async function logout() {
//     if (token) {
//       // const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/token/refresh/logout/`;
//       const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`;
//       await fetch(url, { method: "delete", credentials: "include" });
//       internalToken = null;
//       setToken(null);
//       navigate("/");
//     }
//   }

//   async function login(username, password) {
//     const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`;
//     const form = new FormData();
//     form.append("username", username);
//     form.append("password", password);
//     const response = await fetch(url, {
//       method: "post",
//       credentials: "include",
//       body: form,
//     });
//     if (response.ok) {
//       const token = await getTokenInternal();
//       setToken(token);
//       setTimeout(() => {
//         navigate("/");
//       }, 1000);
//       return;
//     }
//     let error = await response.json();
//     return handleErrorMessage(error);
//   }

//   async function signup(username, password, email) {
//     const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/new`;
//     const response = await fetch(url, {
//       method: "post",
//       body: JSON.stringify({
//         username,
//         password,
//         email,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.ok) {
//       await login(username, password);
//     }
//     return false;
//   }


//   async function update(username, password, email) {
//     const url = `${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/api/accounts/`;
//     const response = await fetch(url, {
//       method: "put",
//       body: JSON.stringify({
//         username,
//         password,
//         email,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token.access_token}`,
//       },
//     });
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     }
//     return false;
//   }

//   return [token, login, logout, signup, update];
// }

// // export default logout;