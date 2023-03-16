import { add } from '@/data/protocols/firebase'
import { AccountModel } from '@/domain/models'
import { ICompaniesMailingFormFields, IMailingFormFields } from '@/presentation/types/mailing-form'
import { ProspectType } from '@/types/services'

export async function createProspect(
  id: string | number,
  type: ProspectType,
  filters: IMailingFormFields | ICompaniesMailingFormFields,
  quantity: number | string,
  profile_owner: AccountModel
) {
  // remove undefined and null values from filters
  const cleanFilters: any = filters
  Object.keys(cleanFilters).forEach(key => {
    if (cleanFilters[key] === undefined || cleanFilters[key] === null) {
      delete cleanFilters[key]
    }
  })
  await add('prospects', {
    type: type,
    datastone_id: id,
    cleanFilters,
    quantity,
    user_owner: {
      uid: profile_owner.uid,
      name: profile_owner.name,
      email: profile_owner.email
    },
    status: 'requested',
    download_link: ''
  })
}
