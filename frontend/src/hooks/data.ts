import { list, ListParams } from '@/data/protocols/firebase'
import { useState } from 'react'

export const useProspections = (params?: ListParams) => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const prospections = await list({ ...params, collectionName: 'prospects' })
      setData(prospections)
    } catch (error) {
      console.log('error', error)
      if (process.env.NEXT_PUBLIC_ENV === 'development') {
        console.error(error)
      }
      setError(true)
    }
    setLoading(false)
  }

  return { fetchData, data, loading, error }
}

export const useProfiles = (params?: ListParams) => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const prospections = await list({ ...params, collectionName: 'profiles' })
      setData(prospections)
    } catch (error) {
      console.log('error', error)
      if (process.env.NEXT_PUBLIC_ENV === 'development') {
        console.error(error)
      }
      setError(true)
    }
    setLoading(false)
  }

  return { fetchData, data, loading, error }
}

export const useExtracts = (params?: ListParams) => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const extracts = await list({ ...params, collectionName: 'extracts' })
      setData(extracts)
    } catch (error) {
      console.log('error', error)
      if (process.env.NEXT_PUBLIC_ENV === 'development') {
        console.error(error)
      }
      setError(true)
    }
    setLoading(false)
  }

  return { fetchData, data, loading, error }
}
