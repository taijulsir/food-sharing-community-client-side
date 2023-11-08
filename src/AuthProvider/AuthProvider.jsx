/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {  signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleAuthProvider = new GoogleAuthProvider()
    const githubAuthProvider = new GithubAuthProvider()
     
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password);
    }
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password);
    }
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleAuthProvider)
    }
    const githubLogin = () => {
        setLoading(true)
       return signInWithPopup( auth,githubAuthProvider)
    }
    const profileUpdate = (name,photoUrl) => {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoUrl,
        })
    }
 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged (auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }
           setUser(currentUser);
           setLoading(false);
           if (currentUser) {
            axios.post('https://food-donation-community-server-side.vercel.app/jwt', loggedUser, { withCredentials: true })
                .then(res => {
                    console.log('token response', res.data)
                })
        }
        else {
            axios.post('https://food-donation-community-server-side.vercel.app/logout', loggedUser, { withCredentials: true })
                .then(res => {
                    console.log(res.data)
                })
        }
        });
        return () => unsubscribe;
    },[ user?.email])
    
    const authInfo = {user,loading, createUser,signIn,signOutUser ,googleLogin,githubLogin,profileUpdate};
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default Authprovider;