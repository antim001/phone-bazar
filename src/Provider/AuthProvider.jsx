import {createContext} from 'react';
import { getAuth,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword ,
    signInWithEmailAndPassword} from "firebase/auth";
import { auth } from './../firebase/firebase.config';
export const AuthContext=createContext()
const googleprovider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn=(email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn=()=>{
 return signInWithPopup(auth, googleprovider)
    }

    const authInfo={
        createUser,
           googleLogIn,
           logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;