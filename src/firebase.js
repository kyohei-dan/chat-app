import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
	.initializeApp({
		apiKey: "AIzaSyBthbkh0qBST7sRXPVri8rSa5R7XW059iY",
		authDomain: "chat-app-77977.firebaseapp.com",
		projectId: "chat-app-77977",
		storageBucket: "chat-app-77977.appspot.com",
		messagingSenderId: "559395262790",
		appId: "1:559395262790:web:0cba5c9719cb2424529547",
	})
	.auth();
