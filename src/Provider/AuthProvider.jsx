import { createContext, useEffect, useState } from 'react';
import { getAuth,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { auth } from './../firebase/firebase.config';
export const AuthContext=createContext()
const googleprovider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user,setUser]=useState({})
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn=(email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn=()=>{
 return signInWithPopup(auth, googleprovider)
    }

    const logOut=()=>{
       return  signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            setUser(user)
          });
    },[])
console.log(user);
    const authInfo={
        createUser,
           googleLogIn,
           logIn,user,logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;