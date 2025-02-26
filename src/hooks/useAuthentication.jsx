import { db } from "../firebase/config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // cleanup => deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    // authentication functions
    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    // creating user
    const createUser = async (data) => {
        checkIfIsCancelled();

        // loading data
        setLoading(true);

        // cleaning past
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.displayName,
            });

            // loading data is over
            setLoading(false);

            return;
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "Email já cadastrado";
            } else {
                systemErrorMessage = "Ocorreu um erro. Por favor, tente mais tarde!";
            }

            // loading data is over
            setLoading(false);
            setError(systemErrorMessage);
        }
    };

    // logout
    const logout = () => {
        checkIfIsCancelled();
        signOut(auth)
    }

    // login
    const login = async (data) => {
        checkIfIsCancelled(); // avoiding data leaking

        setLoading(true); // its loading
        setError(false);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading();
        } catch (error) {
            let systemErrorMessage;
            console.log(error)

            if (error.message.includes("invalid-credential")) {
                systemErrorMessage = "Dados inválidos!";
            } else {
                systemErrorMessage = "Ocorreu um erro. Tente mais tarde."
            }

            setError(systemErrorMessage);
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    };
};
