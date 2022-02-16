import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initilaizeAuthintecation from "../firebase/firebase.init";

initilaizeAuthintecation();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
              setUser(result.user)
        })
    }
    return {
        user,googleSignIn
    }

}
export default useFirebase;