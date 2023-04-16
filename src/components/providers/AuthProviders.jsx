import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";


export const AuthContex = createContext(null)
// const auth = getAuth(app)


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)

    const authInfo = {
        user
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;