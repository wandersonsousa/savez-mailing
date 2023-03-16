import { AccountModel } from '@/domain/models'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

// ** Firebase
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const defaultValue = {
  user: null,
  setUser: () => {
    return null
  },
  logout: () => {
    return null
  },
  authenticated: undefined
}
const UserContext = createContext<{
  user: AccountModel | null
  setUser: (user: AccountModel | null) => void
  logout: () => void
  authenticated: boolean | undefined
}>(defaultValue)

import { get } from '@/data/protocols/firebase'
import { User } from 'firebase/auth'

export const getProfile = async (user: User): Promise<AccountModel | null> => {
  const profile = await get('profiles', user.uid)
  if (!profile) return null
  const AccountModel = {
    status: profile.status,
    name: user.displayName || profile.name,
    email: user.email || profile.email,
    whatsapp_phone: profile.whatsapp_phone,
    uid: user.uid,
    photoUrl: user.photoURL || `${process.env.NEXT_PUBLIC_BASE_URL}/images/avatars/1.png`,
    createdAt: profile.createdAt,
    updatedAt: profile.updatedAt,
    lastLoginAt: profile.lastLoginAt,
    credit_balance: profile.credit_balance
  }

  return AccountModel
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AccountModel | null>(null)
  const [authenticated, setAuthenticated] = useState<boolean | undefined>(undefined)
  const auth = getAuth()

  const logout = () => {
    auth.signOut()
  }

  useEffect(() => {
    onAuthStateChanged(auth, async user => {
      if (user) {
        const profile = await getProfile(user)

        /*   if (!profile) {
          await auth.currentUser?.delete()
          setAuthenticated(false)

          return
        } */
        setUser(profile)
        setAuthenticated(true)
      } else {
        setAuthenticated(false)
      }
    })
  }, [auth])

  return <UserContext.Provider value={{ user, setUser, authenticated, logout }}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}

export default UserContext
