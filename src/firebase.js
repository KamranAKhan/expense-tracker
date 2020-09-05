import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSy65rRZ06Jl156Z6K_NgVwADsp1LMCgI",
    authDomain: "expense-tracker-8c15f.firebaseapp.com",
    databaseURL: "https://expense-tracker-8c15f.firebaseio.com",
    projectId: "expense-tracker-8c15f",
    storageBucket: "expense-tracker-8c15f.appspot.com",
    messagingSenderId: "1029163889090",
    appId: "1:1029163889090:web:001fa52aeffac26169a65b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const InitializeFirebase = () => {
  Notification.requestPermission().then((permission) => {
    console.log(permission)
    if (permission === 'granted') {
      messaging.getToken().then((currentToken) => {
        if (currentToken) {
            console.log(currentToken)            
      
        } else {
          // Show permission request.
          console.log('No Instance ID token available. Request permission to generate one.');
          // Show permission UI.
      
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
  
      });
  
    }
  
  })
}