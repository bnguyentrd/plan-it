function LogOut() {
    const logout = () => {
        fetch(`${process.env.REACT_APP_ACCOUNTS_SERVICE_API_HOST}/token`, {
          method: "DELETE",
          credentials: "include", // include cookies in the request
        }).then(() => {
          setCurrentUser(null);
        });
      };
}


export default LogOut
