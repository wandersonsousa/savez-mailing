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

const firebaseConfig = {
  apiKey: "AIzaSyDIFQPOs6_IJFO92reRQVCbbWLnQjY_6Eo",
  authDomain: "savez-mailing.firebaseapp.com",
  projectId: "savez-mailing",
  storageBucket: "savez-mailing.appspot.com",
  messagingSenderId: "873309568749",
  appId: "1:873309568749:web:57a213489ab3e843e356e4",
  measurementId: "G-GLDKY6M7RX"
};
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
let analytics_temp
let performance_temp

if (typeof window !== 'undefined') {
  analytics_temp = getAnalytics(app)
  performance_temp = getPerformance(app)
}

export const storageKey = 'savez-321c0-local-storage-231901211'
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
