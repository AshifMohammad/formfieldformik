import * as Yup from 'yup';

const formikProps={
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const Schema =  Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required'),

})

export default  {formikProps,Schema}