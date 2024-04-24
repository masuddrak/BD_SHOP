import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
// my auth context
export const authContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user observer
    const observerID=onAuthStateChanged(auth, (currentUser) => {
       
        if (currentUser) {
            setUser(currentUser)
            setLoading(false)
        } 
        observerID()
       
    });
    // authenticaion info
    if(loading){
        return <h1 className="text-7xl font-extrabold"> Loading.........</h1>
    }
    console.log(user)
    const authInfo = { createUser,user }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
    
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}