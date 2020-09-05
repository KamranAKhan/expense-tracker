importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBSy65rRZ06Jl156Z6K_NgVwADsp1LMCgI",
    authDomain: "expense-tracker-8c15f.firebaseapp.com",    
    projectId: "expense-tracker-8c15f",    
    messagingSenderId: "1029163889090",
    appId: "1:1029163889090:web:001fa52aeffac26169a65b"
})

firebase.messaging();