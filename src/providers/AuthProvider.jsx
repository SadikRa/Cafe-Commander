import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider 
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const GoogleLogin = () => {
   return signInWithPopup(auth, provider);
  };

  const gitHubLogin = () => {
    return signInWithPopup(auth, githubProvider)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUseProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    logIn,
    logOut,
    updateUseProfile,
    GoogleLogin,
    gitHubLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
