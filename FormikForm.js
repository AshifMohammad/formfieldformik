import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

const FormikFormField = ({formikProps})=>
    <Formik
        initialValues={formikProps.initialValues}
        validationSchema={formikProps.Schema}
        onSubmit={fields => {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
        }}
        render={({ errors, status, touched }) => (

            <div className="form-group">
                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
            </div>

        )}
    />
export default {FormikFormField}