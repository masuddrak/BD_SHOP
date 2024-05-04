import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
// my auth context
export const authContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    // user observer
    const observerID = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUser(currentUser)
        }
        else{
            setUser(null)
        }
        return () => observerID()

    });
    // authenticaion info
    // if (loading) {
    //     return <div className="min-h-screen w-full flex justify-center items-center">
    //         <h1 className="text-7xl font-extrabold"> Loading.........</h1>
    //     </div>
    // }
    console.log(user)
    const authInfo = { createUser, loginUser, user, logoutUser,loading }
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