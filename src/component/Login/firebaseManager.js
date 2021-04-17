import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initialiseSignIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    else {
        firebase.app()
    }
}

export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then((res) => {
            const googleLoginUser = res.user;
            console.log("google user", googleLoginUser)
            return googleLoginUser;
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
            const errorMessage = error.message;
            alert(errorMessage);
            const email = error.email;
            alert(email);
            // alert(errorCode, email, errorMessage);
        });

}