import axios from 'axios'
import get from 'lodash/get'
import { formDataToProspecPayload, formDataToProspectCompaniesPayload } from '@/helpers/prospec'
import { ICompaniesMailingFormFields, IMailingFormFields } from '@/presentation/types/mailing-form'
import { createProspect } from '@/services/extract'
import { AccountModel } from '@/domain/models'
import { ProspectType } from '@/types/services'

export async function searchNeighborhoods(query: string, city: string, state: string): Promise<string[]> {
  const response = await axios.get(`https://api.datastone.com.br/v1/geo/neighborhood/?name=${query}&city=${city}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.NEXT_PUBLIC_DATASTONE_KEY}`
    }
  })

  const results = get(response.data, 'results', [])

  return results.map((city: { value: string }) => city.value)
}

export async function searchCities(query: string): Promise<string[]> {
  const response = await axios.get(`https://api.datastone.com.br/v1/geo/city?name=${query}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.NEXT_PUBLIC_DATASTONE_KEY}`
    }
  })

  const results = get(response.data, 'results', [])

  return results.map((city: { value: string }) => city.value)
}

export type Cnae = {
  code: string
  description: string
}
export async function searchCnaes(query: string): Promise<Cnae[]> {
  const response = await axios.get(`https://api.datastone.com.br/v1/cnae/?description=${query}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.NEXT_PUBLIC_DATASTONE_KEY}`
    }
  })

  const results: Cnae[] = get(response.data, 'results', [])

  return results
}

export async function fetchProspectResult(prospectId: string | number): Promise<{ file: Location }> {
  const response = await axios.get(`https://api.datastone.com.br/v1/prospection/${prospectId}/result/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.NEXT_PUBLIC_DATASTONE_KEY}`
    }
  })

  return response.data
}

export async function prospect(filters: IMailingFormFields, quantity: number | string, profile_owner: AccountModel) {
  const payload = formDataToProspecPayload(filters, quantity, profile_owner.email)
  const response = await axios.post('https://api.datastone.com.br/v1/persons/prospect/', payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.NEXT_PUBLIC_DATASTONE_KEY}`
    }
  })

  if (response.status === 200) {
    await createProspect(response.data.id, ProspectType.PERSON_TYPE, filters, quantity, profile_owner)

    return {
      done: true,
      id: response.data.id
    }
  } else {
    return {
      done: false,
      error: response.data.error
    }
  }
}

export async function prospectCompanies(
  filters: ICompaniesMailingFormFields,
  quantity: number | string,
  profile_owner: AccountModel
) {
  const payload = formDataToProspectCompaniesPayload(filters, {
    quantity,
    callbackEmail: profile_owner.email
  })
  const response = await axios.post('https://api.datastone.com.br/v1/company/prospect/', payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.NEXT_PUBLIC_DATASTONE_KEY}`
    }
  })

  if (response.status === 200) {
    await createProspect(response.data.id, ProspectType.COMPANY_TYPE, filters, quantity, profile_owner)

    return {
      done: true,
      id: response.data.id
    }
  } else {
    return {
      done: false,
      error: response.data.error
    }
  }
}
