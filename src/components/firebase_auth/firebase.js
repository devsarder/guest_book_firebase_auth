// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.messagingSenderId,
  appId: import.meta.env.VITE_appid,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const faceBookAuthProvider = new FacebookAuthProvider();
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const user = (await createUserWithEmailAndPassword(auth, email, password))
      .user;
    return user;
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (err) {
    console.log(err);
  }
};

const handleSignOut = async (navigate) => {
  try {
    await signOut(auth);
    console.log("user signed out");
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
};
const handlePasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error);
  }
};

const onGoogleLogin = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    return res;
  } catch (error) {
    console.log(error);
  }
};
const onFaceBookLogin = async () => {
  try {
    const res = await signInWithPopup(auth, faceBookAuthProvider);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export {
  auth,
  handlePasswordReset,
  handleSignOut,
  loginUser,
  onFaceBookLogin,
  onGoogleLogin,
  registerWithEmailAndPassword,
};
