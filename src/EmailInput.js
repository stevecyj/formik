import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.css';

// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = 'Required';
//     } else if (values.firstName.length > 15) {
//         errors.firstName = 'Must be 15 characters or less';
//     }

//     if (!values.lastName) {
//         errors.lastName = 'Required';
//     } else if (values.lastName.length > 20) {
//         errors.lastName = 'Must be 20 characters or less';
//     }

//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     return errors;
// };

const EmailInput = () => {
    const formik = useFormik({
        initialValues: {
            firsName: '',
            lastName: '',
            phone: '',
            email: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, '只能比15個字少')
                .required('必填'),
            lastName: Yup.string()
                .max(20, '只能比20個字少')
                .required('必填'),
            email: Yup.string()
                .email('不符合 email 格式')
                .required('必填')
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" {...formik.getFieldProps('firstName')} />
            {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" {...formik.getFieldProps('lastName')} />
            {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

            <label htmlFor="email">Email Address</label>
            <input name="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <div id="submit">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default EmailInput;
