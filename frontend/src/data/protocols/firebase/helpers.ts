// ** Firebase
import { getCurrentTimestamp } from '@/helpers/time'
import {
  createUserWithEmailAndPassword,
  User,
  UserCredential,
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase
} from 'firebase/auth'

import {
  doc,
  addDoc,
  updateDoc,
  collection,
  getDoc,
  DocumentSnapshot,
  orderBy,
  limit,
  getDocs,
  query,
  where,
  WhereFilterOp,
  setDoc
} from 'firebase/firestore'

import { db, firebaseAuth } from 'src/helpers/firebase'

export type ListParams = {
  filters?: {
    field: string
    op?: WhereFilterOp | undefined
    value: string | number
  }[]
  orderBy?: string
  direction?: 'asc' | 'desc'
  limit?: number
}
export type CollectionListParams = ListParams & {
  collectionName: string
}

export const save = async (id: string, collectionName: string, data: object): Promise<any> => {
  const itemDoc = doc(db, collectionName, id)
  await setDoc(itemDoc, data)
}

export const add = async (collectionName: string, data: object): Promise<any> => {
  const collectionRef = collection(db, collectionName)
  const currentTimestamp = getCurrentTimestamp()

  const result = { ...data, createdAt: currentTimestamp, updatedAt: currentTimestamp }

  await addDoc(collectionRef, result)
}

export const update = async (collectionName: string, id: string, data: object): Promise<any> => {
  const itemDoc = doc(db, collectionName, id)

  const currentTimestamp = getCurrentTimestamp()

  const result = { ...data, updatedAt: currentTimestamp }

  await updateDoc(itemDoc, result)
}

export const get = async (collectionName: string, id: string): Promise<any> => {
  const itemDoc = doc(db, collectionName, id)
  const itemSnap = await getDoc(itemDoc)

  if (itemSnap.exists()) {
    return itemSnap.data()
  }
}

export const getAll = async (collectionName: string): Promise<any> => {
  const collectionRef = collection(db, collectionName)
  const collectionSnap = await getDocs(collectionRef)

  if (collectionSnap.empty) {
    return []
  }

  return collectionSnap.docs.map((doc: DocumentSnapshot) => doc.data())
}

export const list = async (params: CollectionListParams) => {
  const { collectionName, filters, orderBy: orderByParam, direction, limit: limitParam } = params
  const collectionRef = collection(db, collectionName)

  const whereQueries = filters ? filters.map(filter => where(filter.field, filter.op || '==', filter.value)) : []
  orderByParam && whereQueries.push(orderBy(orderByParam || 'createdAt', direction || 'desc'))
  limitParam && whereQueries.push(limit(limitParam || 10))

  const prepareQuery = query(collectionRef, ...whereQueries)

  const querySnap = await getDocs(prepareQuery)

  if (querySnap.empty) {
    return []
  }

  const data: any[] = []
  for await (const doc of querySnap.docs) {
    data.push({
      id: doc.id,
      ...doc.data()
    })
  }

  return data
}

export const signUpWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
}
export const signInWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPasswordFirebase(firebaseAuth, email, password)
}

export const getUser = async (): Promise<User | null> => {
  return await firebaseAuth.currentUser
}
