import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDKSZBcL8DDo2-slpvBzdWUC9yaX3-ljRs",
    authDomain: "react-coder-luis-yslas.firebaseapp.com",
    projectId: "react-coder-luis-yslas",
    storageBucket: "react-coder-luis-yslas.appspot.com",
    messagingSenderId: "180334844931",
    appId: "1:180334844931:web:8265887a63661b0eb00236"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}