import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      firebase.auth().onAuthStateChanged(setCurrentUser);
    } else {
      localStorage.getItem("currentUser") &&
        setCurrentUser(localStorage.getItem("currentUser"));

      console.log("using local");
    } 
  }, []);
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  });

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
