import {initializeApp} from 'firebase/app'
import {getFirestore, query, getDocs, collection, where, addDoc} from 'firebase/firestore'
import {getAuth, signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail, signOut} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAzY1MZsPeobx1-BwF6eaBcaHh811D_-3E",
    authDomain: "practica-final-92bb5.firebaseapp.com",
    projectId: "practica-final-92bb5",
    storageBucket: "practica-final-92bb5.appspot.com",
    messagingSenderId: "1059769625087",
    appId: "1:1059769625087:web:8a130aa7a41ab1badc1fca"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)



const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};


export {auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,}