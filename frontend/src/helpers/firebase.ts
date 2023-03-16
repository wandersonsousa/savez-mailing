import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  signInWithCustomToken as signInWithCustomToken_,
  FacebookAuthProvider as FacebookAuthProvider_,
  signInWithPopup,
  updatePassword,
  sendPasswordResetEmail,
  OAuthProvider,
  updateProfile
} from 'firebase/auth'
import { getPerformance } from 'firebase/performance'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL: 'https://lista-ninja-d15d6.firebaseio.com',
  apiKey: 'AIzaSyC2Zug0QLQk5gD6zegdvcxO4_WSx4TsRHc',
  authDomain: 'lista-ninja-d15d6.firebaseapp.com',
  projectId: 'lista-ninja-d15d6',
  storageBucket: 'lista-ninja-d15d6.appspot.com',
  messagingSenderId: '714139486371',
  appId: '1:714139486371:web:0c5122829bf4c5f7ebd716',
  measurementId: 'G-Y3GSJWCH5S'
}

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
let analytics_temp
let performance_temp

if (typeof window !== 'undefined') {
  analytics_temp = getAnalytics(app)
  performance_temp = getPerformance(app)
}

export const storageKey = 'pjhelp-321c0-local-storage-231901211'
export const analytics = analytics_temp
export const performance = performance_temp
export const signInWithEmail = signInWithEmailAndPassword
export const signInWithPopupLogin = signInWithPopup
export const createUserWithEmail = createUserWithEmailAndPassword
export const signInAnonymous = signInAnonymously
export const firebaseAuth = getAuth(app)
export const updatePassword_ = updatePassword
export const sendPasswordResetEmail_ = sendPasswordResetEmail
export const storage = firebase.storage()
export const FacebookAuthProvider = new FacebookAuthProvider_()
export const signInWithCustomToken = signInWithCustomToken_
export const OAuthProvider_ = OAuthProvider
export const db = getFirestore(app)
export const updateFirebaseUser = updateProfile
