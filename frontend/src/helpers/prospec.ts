import { ICompaniesMailingFormFields, IMailingFormFields } from 'src/presentation/types/mailing-form'
import dayjs from 'dayjs'

export function formDataToGetCountPayload(data: IMailingFormFields) {
  const hasCitiesFilters = data.cities.length

  const payload: any = {
    name: data.prospect_name,
    cities: data.cities,
    states: hasCitiesFilters ? [] : data.states,
    birthday_months: [],
    cbo_codes: data.occupations,
    estimated_income: [{}],
    age: {},
    estimated_employees: [],
    estimated_created: [],
    cnae_codes: [],
    revenues: [],
    nature_codes: [],
    sector_codes: [],
    capitals: [],
    vehicles: [],
    neighborhoodies: [],
    contact_channels: ['whatsapp'],
    plan: 4,
    export: false
  }

  if (data.minimum_age) payload.age.lower = data.minimum_age
  if (data.maximum_age) payload.age.upper = data.maximum_age
  if (!data.minimum_age || !data.maximum_age) delete payload.age
  if (data.minimum_income) payload.estimated_income[0].lower = data.minimum_income
  if (data.maximum_income) payload.estimated_income[0].upper = data.maximum_income
  if (!data.minimum_income || data.maximum_income) delete payload.estimated_income
  if (data.by_birth_month) payload.birthday_months = [data.by_birth_month]
  if (data.gender) payload.gender = data.gender

  return payload
}

export function formDataToGetCountCompaniesPayload(data: ICompaniesMailingFormFields) {
  const hasNeighbhoodsFilters = data.neighborhoods.length

  const payload: any = {
    name: data.prospect_name,
    cities: hasNeighbhoodsFilters ? [] : data.cities,
    states: hasNeighbhoodsFilters ? [] : data.states,
    neighborhoodies: data.neighborhoods,
    cbo_codes: data.business_contacts,
    estimated_employees: [],
    cnae_codes: data.cnaes_codes.map(cnae => cnae.code),
    estimated_created: [],
    revenues: [],

    // headquarter_type: '',
    capitals: [],
    sector_codes: [],
    nature_codes: [],
    vehicles: [],

    callback_email: 'no-reply@datastone.com.br',
    file_formatting: 'csv',
    contact_channels: ['whatsapp'],
    plan: 4,
    export: false
  }

  if (data.company_type) payload.company_type = data.company_type
  if (data.mei_type) payload.mei_type = data.mei_type
  if (data.simples_type) payload.simple_type = data.simples_type
  if (data.import_export) payload.import_export = data.import_export

  if (data.minimum_employess !== undefined || data.maximum_employess !== undefined) {
    payload.estimated_employees.push({})
    if (data.minimum_employess !== undefined) payload.estimated_employees[0].lower = String(data.minimum_employess)
    if (data.maximum_employess !== undefined) payload.estimated_employees[0].upper = String(data.maximum_employess)
  }

  if (data.minimum_existence_time || data.maximum_existence_time) {
    payload.estimated_created.push({})
    if (data.minimum_existence_time !== undefined)
      payload.estimated_created[0].lower = dayjs(data.minimum_existence_time).format('YYYY-MM-DD')
    if (data.maximum_existence_time !== undefined)
      payload.estimated_created[0].upper = dayjs(data.maximum_existence_time).format('YYYY-MM-DD')
  }

  if (data.minimum_annual_billinng !== undefined || data.maximum_annual_billinng !== undefined) {
    payload.revenues.push({})
    if (data.minimum_annual_billinng !== undefined) payload.revenues[0].upper = String(data.minimum_annual_billinng)
    if (data.maximum_annual_billinng !== undefined) payload.revenues[0].upper = String(data.maximum_annual_billinng)
  }

  if (data.minimum_capital_stock !== undefined || data.maximum_capital_stock !== undefined) {
    payload.capitals.push({})
    if (data.minimum_capital_stock !== undefined) payload.capitals[0].upper = String(data.minimum_capital_stock)
    if (data.maximum_capital_stock !== undefined) payload.capitals[0].upper = String(data.maximum_capital_stock)
  }

  if (data.minimum_vehicles !== undefined || data.maximum_vehicles !== undefined) {
    payload.vehicles.push({})
    if (data.minimum_vehicles !== undefined) payload.vehicles[0].upper = String(data.minimum_vehicles)
    if (data.maximum_vehicles !== undefined) payload.vehicles[0].upper = String(data.maximum_vehicles)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.fromEntries(Object.entries(payload).filter(([_, v]) => v !== '' && v != null && v !== undefined))
}

export function formDataToProspectCompaniesPayload(
  data: ICompaniesMailingFormFields,
  { quantity, callbackEmail }: { quantity: number | string; callbackEmail: string }
) {
  const hasNeighbhoodsFilters = data.neighborhoods.length
  const hasCitiesFilters = data.cities.length

  const payload: any = {
    name: data.prospect_name,
    cities: hasNeighbhoodsFilters ? [] : data.cities,
    states: hasNeighbhoodsFilters ? [] : hasCitiesFilters ? [] : data.states,
    neighborhoodies: data.neighborhoods,
    cbo_codes: data.business_contacts,
    estimated_employees: [],
    cnae_codes: data.cnaes_codes.map(cnae => cnae.code),
    estimated_created: [],
    revenues: [],

    // headquarter_type: '',
    capitals: [],
    sector_codes: [],
    nature_codes: [],
    vehicles: [],

    callback_email: callbackEmail,
    file_formatting: 'csv',
    contact_channels: ['whatsapp'],
    plan: 4,
    export: true,
    quantity
  }

  if (data.company_type) payload.company_type = data.company_type
  if (data.mei_type) payload.mei_type = data.mei_type
  if (data.simples_type) payload.simple_type = data.simples_type
  if (data.import_export) payload.import_export = data.import_export

  if (data.minimum_employess !== undefined || data.maximum_employess !== undefined) {
    payload.estimated_employees.push({})
    if (data.minimum_employess !== undefined) payload.estimated_employees[0].lower = String(data.minimum_employess)
    if (data.maximum_employess !== undefined) payload.estimated_employees[0].upper = String(data.maximum_employess)
  }

  if (data.minimum_existence_time || data.maximum_existence_time) {
    payload.estimated_created.push({})
    if (data.minimum_existence_time !== undefined)
      payload.estimated_created[0].lower = dayjs(data.minimum_existence_time).format('YYYY-MM-DD')
    if (data.maximum_existence_time !== undefined)
      payload.estimated_created[0].upper = dayjs(data.maximum_existence_time).format('YYYY-MM-DD')
  }

  if (data.minimum_annual_billinng !== undefined || data.maximum_annual_billinng !== undefined) {
    payload.revenues.push({})
    if (data.minimum_annual_billinng !== undefined) payload.revenues[0].upper = String(data.minimum_annual_billinng)
    if (data.maximum_annual_billinng !== undefined) payload.revenues[0].upper = String(data.maximum_annual_billinng)
  }

  if (data.minimum_capital_stock !== undefined || data.maximum_capital_stock !== undefined) {
    payload.capitals.push({})
    if (data.minimum_capital_stock !== undefined) payload.capitals[0].upper = String(data.minimum_capital_stock)
    if (data.maximum_capital_stock !== undefined) payload.capitals[0].upper = String(data.maximum_capital_stock)
  }

  if (data.minimum_vehicles !== undefined || data.maximum_vehicles !== undefined) {
    payload.vehicles.push({})
    if (data.minimum_vehicles !== undefined) payload.vehicles[0].upper = String(data.minimum_vehicles)
    if (data.maximum_vehicles !== undefined) payload.vehicles[0].upper = String(data.maximum_vehicles)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.fromEntries(Object.entries(payload).filter(([_, v]) => v !== '' && v != null && v !== undefined))
}

export function formDataToProspecPayload(data: IMailingFormFields, quantity: string | number) {
  const payload: any = {
    name: data.prospect_name,
    cities: data.cities,
    states: data.states,
    birthday_months: [],
    cbo_codes: data.occupations,
    estimated_income: [{}],
    age: {},
    estimated_employees: [],
    estimated_created: [],
    cnae_codes: [],
    revenues: [],
    nature_codes: [],
    sector_codes: [],
    capitals: [],
    vehicles: [],
    neighborhoodies: [],
    contact_channels: ['whatsapp'],
    plan: '4',
    export: true,
    quantity
  }

  if (data.minimum_age) payload.age.lower = data.minimum_age
  if (data.maximum_age) payload.age.upper = data.maximum_age
  if (!data.minimum_age || !data.maximum_age) delete payload.age
  if (data.minimum_income) payload.estimated_income[0].lower = data.minimum_income
  if (data.maximum_income) payload.estimated_income[0].upper = data.maximum_income
  if (!data.minimum_income || data.maximum_income) delete payload.estimated_income
  if (data.by_birth_month) payload.birthday_months = [data.by_birth_month]
  if (data.gender) payload.gender = data.gender

  return payload
}
