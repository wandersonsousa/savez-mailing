import { Authentication } from '@/domain/usecases'
import { InvalidCredentialsError, UnexpectedError, AccessDeniedError } from '@/domain/errors'
import { get, update, signInWithEmailAndPassword } from '@/data/protocols/firebase'
import { FirebaseAddAccount } from './firebase-add-account'

export class FirebaseAuthentication implements Authentication {
  /* constructor(private readonly signIn: (email: string, password: string) => Promise<UserCredential>) {} */

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    try {
      const userCredentials = await signInWithEmailAndPassword(params.email, params.password)
      const profile = await get('profiles', userCredentials.user.uid)

      if (!profile) {
        const firebaseAddAccount = new FirebaseAddAccount()
        await firebaseAddAccount.add({
          ...params,
          name: userCredentials.user.displayName || '',
          whatsapp_phone: userCredentials.user.phoneNumber || ''
        })
      }

      const { status, createdAt, updatedAt, lastLoginAt, credit_balance } = profile

      const updatedUserData = {
        uid: userCredentials.user.uid,
        name: userCredentials.user.displayName || profile.name || 'Usuário',
        email: userCredentials.user.email || '',
        photoUrl: userCredentials.user.photoURL || `${process.env.NEXT_PUBLIC_BASE_URL}/images/avatars/1.png`,
        status: status,
        whatsapp_phone: profile.whatsapp_phone || '',
        createdAt,
        updatedAt,
        lastLoginAt,
        credit_balance
      }

      await update('profiles', userCredentials.user.uid, updatedUserData)

      return updatedUserData
    } catch (error: any) {
      if (process.env.NEXT_PUBLIC_ENV === 'development') {
        console.error(error)
      }
      if (error.code === 'auth/invalid-credential') {
        throw new InvalidCredentialsError()
      }

      if (error.code === 'auth/user-not-found') {
        throw new AccessDeniedError()
      }

      throw new UnexpectedError()
    }
  }
}

export namespace RemoteAuthentication {
  export type Model = Authentication.Model
}
