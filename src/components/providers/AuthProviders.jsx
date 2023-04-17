import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContex = createContext(null)

const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        user,
        createUser,
        signInUser
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;