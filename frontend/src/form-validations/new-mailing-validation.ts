import { BRAZILIAN_MONTHS_OPTIONS, GENDER_OPTIONS } from 'src/utils/constants'
import * as yup from 'yup'
import { pt } from 'yup-locale-pt'

yup.setLocale(pt)

export default yup
  .object({
    prospect_name: yup.string().required('Campo requerido'),
    minimum_age: yup.number().required('Campo requerido').min(0),
    maximum_age: yup.number().required('Campo requerido').min(0),
    minimum_income: yup.number().required('Campo requerido').min(0),
    maximum_income: yup.number().required('Campo requerido').min(0),
    by_birth_month: yup.string().optional().nullable(),
    /*       .oneOf(BRAZILIAN_MONTHS_OPTIONS.map(month => month.value)),
     */ gender: yup
      .string()
      .oneOf(GENDER_OPTIONS.map(gender => gender.value))
      .nullable()
  })
  .required()
