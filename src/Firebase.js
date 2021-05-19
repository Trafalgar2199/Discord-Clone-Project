import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC8cSmdnY7_FhF2EcmL5f_owQ9iMr_9F30",
    authDomain: "discord-clone-dr.firebaseapp.com",
    projectId: "discord-clone-dr",
    storageBucket: "discord-clone-dr.appspot.com",
    messagingSenderId: "818998762989",
    appId: "1:818998762989:web:3931383246b174a099dbe4"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig); /* Initialize the app with firebase */
  const db=firebaseapp.firestore(); /* Stuff needed for database */
  const auth=firebase.auth(); /* Stuff needed for Authentification */
  const provider=new firebase.auth.GoogleAuthProvider(); /*  So we can log in with Google acc */

  /* We gonna export authentification and provider as explicit imports */


  export{auth,provider};
  export default db; 