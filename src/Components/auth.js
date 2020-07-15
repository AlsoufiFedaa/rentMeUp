import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';

export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('currentUser')) {
      firebase.auth().onAuthStateChanged(setCurrentUser);
    } else {
      localStorage.getItem('currentUser') &&
        setCurrentUser(localStorage.getItem('currentUser'));

      console.log('using local');
    }
  }, []);
  useEffect(() => {
    if (currentUser !== null) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      localStorage.setItem('currentUserUid', JSON.stringify(currentUser.uid));
    }
  });

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
