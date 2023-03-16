import admin from 'firebase-admin'
import serviceAccount from './serviceAccountKey.json'

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    })
  } catch (error) {}
}

export const db = admin.firestore()
export const timestamp = admin.firestore.FieldValue.serverTimestamp()
