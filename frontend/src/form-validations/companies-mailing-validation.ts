import { COMPANY_TYPE_OPTIONS } from 'src/utils/constants'
import * as yup from 'yup'
import { pt } from 'yup-locale-pt'

yup.setLocale(pt)

export default yup
  .object({
    prospect_name: yup.string().required('Campo requerido'),
    company_type: yup
      .string()
      .oneOf(COMPANY_TYPE_OPTIONS.map(company_type => company_type.value))
      .notRequired(),
    minimum_employess: yup.number().min(0).notRequired(),
    maximum_employess: yup.number().min(0).notRequired(),
    minimum_age: yup.number().min(0).notRequired(),
    maximum_age: yup.number().min(0).notRequired(),
    minimum_annual_billinng: yup.number().min(0).notRequired(),
    maximum_annual_billinng: yup.number().min(0).notRequired()
  })
  .required()
