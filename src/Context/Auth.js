/*import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export default function useAuth() {
  return useContext(AuthContext);
}
*/
import React, { useEffect, useState } from "react";
import firebaseConfig from '../base';

//We set our context for the authentication to the database to use this shortcut in our pages

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <>Loading...</>
  }

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