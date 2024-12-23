import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext();
 const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const creatNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userUpdate = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const signInWithGoogle = () =>{
    return signInWithPopup(auth, provider)
  }
  const authInfo = {
    user,
    setUser,
    creatNewUser,
    logOut,
    userLogin,
    userUpdate,
    loading,
    setLoading,
    signInWithGoogle,
    onAuthStateChanged
  };
  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      setLoading(false);
    });
    return () =>{
      unSubscribe();
    }

  })
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
