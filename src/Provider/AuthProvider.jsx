import PropTypes from "prop-types";

import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup, signOut
} from "firebase/auth";


import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const userLogOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const infoData = {
        user,
        loading,
        createUser,
        userLogIn,
        googleLogIn,
        userLogOut,

    }
    return (
        <AuthContext.Provider value={infoData}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.element.isRequired,
};
export default AuthProvider;
