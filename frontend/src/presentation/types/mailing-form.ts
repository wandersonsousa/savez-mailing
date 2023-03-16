import { Cnae } from '@/services/Datastone'

export interface IMailingFormFields {
  prospect_name: string
  cities: string[]
  states: string[]
  gender: 'F' | 'M' | ''
  minimum_age: string
  maximum_age: string
  minimum_income: string
  maximum_income: string
  by_birth_month: null | string
  occupations: string[]
}

export interface ICompaniesMailingFormFields {
  prospect_name: string
  cities: string[]
  states: string[]
  neighborhoods: string[]
  cnaes_codes: Cnae[]
  minimum_employess: number | undefined
  maximum_employess: number | undefined
  minimum_existence_time: Date | null
  maximum_existence_time: Date | null
  business_contacts: string[]
  minimum_annual_billinng: number | undefined
  maximum_annual_billinng: number | undefined
  company_type: string
  company_size: string
  mei_type: string
  simples_type: string
  minimum_capital_stock: number | undefined
  maximum_capital_stock: number | undefined
  import_export: string
  minimum_vehicles: number | undefined
  maximum_vehicles: number | undefined
}
