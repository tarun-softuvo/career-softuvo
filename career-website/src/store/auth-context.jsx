import axios from "axios";
import React, { useState, useCallback } from "react";
import apiUrl from "../Constant";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  logIn: (token) => {},
  logOut: () => {},
});

const retrieveStoreToken =  () => {
  const tokenInfo = localStorage.getItem("token-info");
  const storedToken = tokenInfo;
  return { token: storedToken };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoreToken();
  console.log("Token data at initial state", tokenData);
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("token-info");
    setToken(null);
  }, []);
  const logInHandler = (token) => {
    console.log("auth ctx login handler", token);
    setToken(token);
    localStorage.setItem("token-info", token);
    console.log("token in auth ctx", token);
  };
  // useEffect(()=>{
  //   if(tokenData){
  //       console.log('time',tokenData.expirationTime)
  //       // console.log(userIsLoggedIn)
  //       logoutTimer = setTimeout(logoutHandler,tokenData.expirationTime)
  //   }
  // },[tokenData,logoutHandler])
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    logIn: logInHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
