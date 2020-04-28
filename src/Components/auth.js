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
  // function useLocalStorage(localItem) {
  //   const { loc, setState } = useState(localStorage.getItem(localItem));
  //   function setLoc(newItem) {
  //     localStorage.setItem(localItem, newItem);
  //     setState(newItem);
  //   }
  //   return [loc, setLoc];
  // }
  // const [currentUser, setCurrentUser] = useLocalStorage("user");
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(setCurrentUser);
  // }, []);
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
