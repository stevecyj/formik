import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './FormikForm.css';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, '至少需要輸入1個字')
        .max(10, '最多10個字')
        .required('必填'),
    email: Yup.string()
        .email('請輸入正確的 email 格式')
        .max(255, '最多255個字')
        .required('必填')
});

const FormikForm = () => {
    return (
        <Formik initialValues={{ name: '', email: '' }} validationSchema={validationSchema}>
            {(values, errors, touched, handleChange, handleBlur) => (
                <form>
                    <div className="input-row">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="輸入你的名字"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className={touched.name && errors.name ? 'has-error' : null}
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="email">email:</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="輸入你的信箱"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className={touched.email && errors.email ? 'has-error' : null}
                        />
                        <div className="input-row">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default FormikForm;
