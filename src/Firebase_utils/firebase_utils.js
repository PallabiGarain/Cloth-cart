import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config={

    apiKey: "AIzaSyBGYAbtCZEhygsbQ_ZV56EJMl7ym6fldfo",
    authDomain: "crwn-db-7095a.firebaseapp.com",
    databaseURL: "https://crwn-db-7095a.firebaseio.com",
    projectId: "crwn-db-7095a",
    storageBucket: "crwn-db-7095a.appspot.com",
    messagingSenderId: "229596252371",
    appId: "1:229596252371:web:4493cbacf34d3dc88e2c26",
    measurementId: "G-NJEEVZBP4X"

}

export const stoteuser= async (userauth,additionaldata)=>{
    if(!userauth) return;

    const userRef=firestore.doc(`User/${userauth}`);

   // const userRef=firestore.doc(`User/123345hjhbj`);

    const snapShot=await userRef.get();

   // console.log(snapShot);
    if(!snapShot.exists){

        const {displayName,email}=userauth;
        const createdat=new Date;
        try{
        await userRef.set({displayName,email, createdat, ...additionaldata});
        }
        catch(e){
                console.log('user not created',e.message);
        }
    }
    return userRef;

};


firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signinwithgoogle= ()=>auth.signInWithPopup(provider);

export default firebase;