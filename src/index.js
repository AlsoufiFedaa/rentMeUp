import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";
import "firebase/firestore";
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyD47xlalTqy3QK4fFgfD9jImnI5prteLfw",
  authDomain: "rentmeup.firebaseapp.com",
  databaseURL: "https://rentmeup.firebaseio.com",
  projectId: "rentmeup",
  storageBucket: "rentmeup.appspot.com",
  messagingSenderId: "259373225502",
  appId: "1:259373225502:web:7e04123dc2de2f3e05000f",
  measurementId: "G-K613V6TT4E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.analytics();


ReactDOM.render(
    <Router><App /></Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
