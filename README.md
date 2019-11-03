# React Form Field Component using Formik 

In-built React Form Field components using Formik library to for UI validations

installations:
`npm i formikformfield --save` 

Usages: 

``` javascript
import React from 'react';
import {FormikFormField} from "formikformfield"

 const FormikTextField = ({formikProps})=> <FormikFormField formikProps={formikProps}/>

```

#formikProps : 
`Yup needs to be imported for validation`
```javascript
const initialValues={
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
```
 
`




#Author : `Ashif Zafar `




