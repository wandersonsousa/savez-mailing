import { AddAccount } from '@/domain/usecases'
import { EmailInUseError, UnexpectedError } from '@/domain/errors'
import { UserStatus } from '@/utils/constants'
import { save, signUpWithEmailAndPassword } from '@/data/protocols/firebase'
import { getCurrentTimestamp } from '@/helpers/time'
import { updateFirebaseUser } from '@/helpers/firebase'

export class FirebaseAddAccount implements AddAccount {
  /*   constructor(private readonly signUp: (email: string, password: string) => Promise<UserCredential>) {}
   */
  async add(params: AddAccount.Params): Promise<AddAccount.Model> {
    try {
      const { user } = await signUpWithEmailAndPassword(params.email, params.password)

      await updateFirebaseUser(user, {
        displayName: params.name,
        photoURL: user.photoURL || ''
      })
      const currentDateTimestamp = getCurrentTimestamp()

      const AccountModel = {
        status: UserStatus.ANALYSING,
        name: params.name,
        email: params.email,
        whatsapp_phone: params.whatsapp_phone,
        uid: user.uid,
        photoUrl: user.photoURL || `${process.env.NEXT_PUBLIC_BASE_URL}/images/avatars/1.png`,
        createdAt: currentDateTimestamp,
        updatedAt: currentDateTimestamp,
        lastLoginAt: currentDateTimestamp,
        credit_balance: {
          whatsapp: 0
        }
      }
      
      await save(user.uid, 'profiles', AccountModel)

      return AccountModel
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        throw new EmailInUseError()
      }

      throw new UnexpectedError()
    }
  }
}

export namespace FirebaseAddAccount {
  export type Model = AddAccount.Model
}
