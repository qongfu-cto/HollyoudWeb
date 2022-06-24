import {initializeApp} from "firebase/app";
import {Auth, getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDsqP_-bDgIkjKEXk0GKulR7mnyARv0dtU",
    authDomain: "qongfu-4a01b.firebaseapp.com",
    databaseURL: "https://qongfu-4a01b.firebaseio.com",
    projectId: "qongfu-4a01b",
    storageBucket: "qongfu-4a01b.appspot.com",
    messagingSenderId: "449077099829",
    appId: "1:449077099829:web:5b5331265e9a44a84ce07c",
};
const app = initializeApp(firebaseConfig);

// export const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider("6LcnYkwdAAAAAHqYr1PCOj_aroTEdo93mLdPEtxl"),
//   isTokenAutoRefreshEnabled: true
// })


export const auth: Auth = getAuth(app);

