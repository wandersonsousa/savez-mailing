import { getCurrentTimestamp } from '@/helpers/time'
import { db } from 'src/helpers/firebase-admin'

export const save = async (id: string, collectionName: string, data: object): Promise<any> => {
  const itemDoc = db.collection(collectionName).doc(id)

  const itemSnap = await itemDoc.get()
  if (itemSnap.exists) {
    await update(collectionName, id, data)
  } else {
    await add(collectionName, data)
  }
}

export const add = async (collectionName: string, data: object): Promise<any> => {
  const collectionRef = db.collection(collectionName)
  const currentTimestamp = getCurrentTimestamp()

  const result = { ...data, createdAt: currentTimestamp, updatedAt: currentTimestamp }

  await collectionRef.add(result)
}

export const update = async (collectionName: string, id: string, data: object): Promise<any> => {
  const itemDoc = db.collection(collectionName).doc(id)
  const currentTimestamp = getCurrentTimestamp()

  const result = { ...data, updatedAt: currentTimestamp }

  await itemDoc.update(result)
}

export const get = async (collectionName: string, id: string): Promise<any> => {
  const itemDoc = db.doc(`${collectionName}/${id}`)
  const itemSnap = await itemDoc.get()
  if (itemSnap.exists) {
    return { ...itemSnap.data(), id: itemSnap.id }
  }

  return null
}

export const getBy = async (collectionName: string, field: string, value: any): Promise<any> => {
  const collectionRef = db.collection(collectionName)
  const querySnap = await collectionRef.where(field, '==', value).get()
  if (querySnap.empty) {
    return null
  }

  return { ...querySnap.docs[0].data(), id: querySnap.docs[0].id }
}

export const getAll = async (collectionName: string): Promise<any> => {
  const collectionRef = db.collection(collectionName)
  const itemsData = await (await collectionRef.get()).docs.map(doc => doc.data())

  return itemsData
}
