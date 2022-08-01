import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  login: Yup.string()
  .min(4, ({min}) => `Login must be at least ${min} characters`)
  .required('Login is required')
  .label('Login'),
  password: Yup.string()
  .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
  .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
  .matches(/\d/, 'Password must have a number')
  .min(8, ({min}) => `Password must be at least ${min} characters`)
  .required('Password is required')
  .label('Password'),
  })