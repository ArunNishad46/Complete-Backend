import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD1daOV2IcPff7rbPQSKQd7z7UlL224nSU",
  authDomain: "fir-auth-bfa7b.firebaseapp.com",
  databaseURL: "https://fir-auth-bfa7b-default-rtdb.firebaseio.com",
  projectId: "fir-auth-bfa7b",
  storageBucket: "fir-auth-bfa7b.firebasestorage.app",
  messagingSenderId: "899374083152",
  appId: "1:899374083152:web:dcc0a176d37c23a01bf555",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if(user){
        setUser(user)
      }else{
        setUser(null)
      }
    })
  }, [])

  const signupUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(user => {
      alert("Registration Successful!")
      return user;
    }) 
    .catch(error => {
      alert(error.message)
      throw error;
    })
  }

  const signinUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
    .then(user => {
      return user;
    })
    .catch(error => {
      alert(error.message)
      throw error;
    })
  }

  const signupWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider)
  }

  const userSignOut = () => signOut(firebaseAuth);

  return(
    <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, signinUserWithEmailAndPassword, signupWithGoogle, user, userSignOut}}>
      {props.children}
    </FirebaseContext.Provider>
  )
}