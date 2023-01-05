import { useContext, createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"

const AuthContext = createContext<any>( undefined )

export function AuthContextProvider(props : any) {

    const [user, setUser] = useState<any>({})

    function googleSignInWithRedirect() {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({
            hd: 'smartreading.org'
        })
        // signInWithPopup(auth, provider)
        signInWithRedirect(auth, provider)
    }

    function googleSignInWithPopup() {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({
            hd: 'smartreading.org'
        })
        signInWithPopup(auth, provider)
    }

    function logout() {
        signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        
        return () => {
            unsubscribe()
        }
        
    },[])
    
    return (
        <AuthContext.Provider  value={{ googleSignInWithRedirect, googleSignInWithPopup, user, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}