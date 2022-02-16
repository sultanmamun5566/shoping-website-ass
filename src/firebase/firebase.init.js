import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initilaizeAuthintecation = () => {
    initializeApp(firebaseConfig);
}
export default initilaizeAuthintecation;