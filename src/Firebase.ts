import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    where,
    query,
    getDocs,
} from 'firebase/firestore'
import { createContext } from 'react'

const firebaseConfig = {
    apiKey: 'AIzaSyBXr2Qt5J-z3UC7_CteAEipuMCkFZfab_g',
    authDomain: 'test-constructor-252c1.firebaseapp.com',
    projectId: 'test-constructor-252c1',
    storageBucket: 'test-constructor-252c1.appspot.com',
    messagingSenderId: '627419586230',
    appId: '1:627419586230:web:4d6e2a40630e6b645c5017',
    measurementId: 'G-TCX9XNEVD8',
}
initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

export const context = {
    auth,
    signInWithPopup,
    GoogleAuthProvider,
    db,
    doc,
    query,
    where,
    addDoc,
    getDocs,
    collection,
}
export const Context = createContext(context)
