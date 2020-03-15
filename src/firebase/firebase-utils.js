import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

 var firebaseConfig = {
   apiKey: "AIzaSyBRLu0TNVKtEHVHjdUsgMwOkDUdqGHs-jY",
   authDomain: "fir-authn-85d57.firebaseapp.com",
   databaseURL: "https://fir-authn-85d57.firebaseio.com",
   projectId: "fir-authn-85d57",
   storageBucket: "fir-authn-85d57.appspot.com",
   messagingSenderId: "734507020643",
   appId: "1:734507020643:web:bdcddc1e62b3b413bea356"
 };

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (user, additionalData) => {
    if(!user) return
    const userRef = firestore.doc(`users/${user.uid}`)
    const snapshot = await userRef.get()
    if(!snapshot.exists) {
        const {displayName, email} = user
        const createdAt =  new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log(error)
        }
    }
    return userRef
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase