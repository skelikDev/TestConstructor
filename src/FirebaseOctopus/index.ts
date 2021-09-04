import { makeAutoObservable } from 'mobx'
import { initializeApp } from 'firebase/app'
import { getAuth, User } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { debug } from '../env'

const firebaseConfig = {
    apiKey: 'AIzaSyBXr2Qt5J-z3UC7_CteAEipuMCkFZfab_g',
    authDomain: 'test-constructor-252c1.firebaseapp.com',
    projectId: 'test-constructor-252c1',
    storageBucket: 'test-constructor-252c1.appspot.com',
    messagingSenderId: '627419586230',
    appId: '1:627419586230:web:4d6e2a40630e6b645c5017',
    measurementId: 'G-TCX9XNEVD8',
}

class FirebaseOctopus {
    loading = false
    app = initializeApp(firebaseConfig)
    auth = getAuth(this.app)
    db = getFirestore(this.app)
    user: User | null = null
    constructor() {
        makeAutoObservable(this)
    }
    setUser(user: User | null) {
        this.user = user
        debug.i(this.user, 'firebaseOctopus', 'USER')
    }
    setLoading(isLoading: boolean) {
        this.loading = isLoading
    }
}

export const firebaseOctopus = new FirebaseOctopus()
