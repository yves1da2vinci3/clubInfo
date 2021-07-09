import  firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAMFRwZ_iyPhZd3jy_Nt_MePcpT7FotZqg",
    authDomain: "dscclubinfo.firebaseapp.com",
    projectId: "dscclubinfo",
    storageBucket: "dscclubinfo.appspot.com",
    messagingSenderId: "1077453339846",
    appId: "1:1077453339846:web:f34705767c86a63679ebc7"
  };
  // Initialize Firebase
 let app =  firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = firebase.auth();
  const storage= firebase.storage();


  export { db,auth,app,storage};