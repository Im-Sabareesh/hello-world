import React from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button, StyledDropzone } from '@components';

const CareerFormFormik = (props) => {

    const basicValidationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        areaCode: Yup.string()
            .min(3, 'Area code must be at least 3 characters')
            .max(3, 'Area code maximum characters is 3')
            .required('Area Code is required'),
        phoneNumber: Yup.string()
            .min(10, 'Phone Number must be at least 10 characters')
            .max(10, 'Phone Number maximum characters is 10')
            .required('Phone Number is required'),
        whenStart: Yup.string()
            .required('Start Date is required'),
        resume: Yup.mixed().required('Resume is required one')
    });
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        areaCode: '',
        phoneNumber: '',
        position: props.name,
        whenStart: '',
        coverLtr: '',
        resume: null
    }
    const hideModal = () => {
    }

    return (
        <>
            <div className="getintouch-form">
                <Formik
                    initialValues={initialValues}
                    validationSchema={basicValidationSchema}
                    enableReinitialize
                    onSubmit={fields => {
                        console.log(fields);
                    }}
                >
                    {({ errors, values, touched, setFieldValue, handleSubmit }) => {
                        return (
                            <Form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="form-group col-6">
                                        <BootstrapForm.Label htmlFor="firstName">First Name</BootstrapForm.Label>
                                        <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                        <ErrorMessage name="firstName" component="div" className="invalid-feedback text-center" />
                                    </div>
                                    <div className="form-group col-6">
                                        <BootstrapForm.Label htmlFor="lastName">Last Name</BootstrapForm.Label>
                                        <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                        <ErrorMessage name="lastName" component="div" className="invalid-feedback text-center" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="firstName">Email</BootstrapForm.Label>
                                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                                            placeholder="ex: myname@example.com" />
                                        <ErrorMessage name="email" component="div" className="invalid-feedback text-center" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="appFor">Phone Number</BootstrapForm.Label>
                                        <div className="row mb-0">
                                            <div className="form-group col-3 mb-0">
                                                <BootstrapForm.Label htmlFor="areaCode">Area Code</BootstrapForm.Label>
                                            </div>
                                            <div className="form-group col-1 text-center mb-0">
                                            </div>
                                            <div className="form-group col-6 mb-0">
                                                <BootstrapForm.Label htmlFor="phoneNumber">Phone Number</BootstrapForm.Label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-3">
                                                <Field name="areaCode" type="text" className={'form-control' + (errors.areaCode && touched.areaCode ? ' is-invalid' : '')} />
                                                <ErrorMessage name="areaCode" component="div" className="invalid-feedback text-center" />
                                            </div>
                                            <div className="form-group col-1 text-center p-3">
                                                -
                                            </div>
                                            <div className="form-group col col-md-8">
                                                <Field name="phoneNumber" type="text" className={'form-control' + (errors.phoneNumber && touched.phoneNumber ? ' is-invalid' : '')} />
                                                <ErrorMessage name="phoneNumber" component="div" className="invalid-feedback text-center" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="appFor">Applying for Position</BootstrapForm.Label>
                                        <Field disabled name="position" type="text" className="form-control" vlaue />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="whenStart">When can you start?</BootstrapForm.Label>
                                        <Field name="whenStart" type="text" className={'form-control' + (errors.whenStart && touched.whenStart ? ' is-invalid' : '')} />
                                        <ErrorMessage name="whenStart" component="div" className="invalid-feedback text-center" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="covLetter">Cover Letter</BootstrapForm.Label>
                                        <Field
                                            as="textarea"
                                            className="msg-field form-control"
                                            name="coverLtr"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="email">Upload Resume</BootstrapForm.Label>
                                        <StyledDropzone name="resume" onFileUpload={(file) => {
                                            setFieldValue('resume', file)
                                        }} />
                                        {
                                            (errors.resume && touched.resume) ? <p className={'invalid-feedback text-center d-block mb-0'}>
                                                Resume is required</p> : null
                                        }
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <Button btnVarient="red-btn" type="submit" className="m-auto career-apply-btn">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
};

export default CareerFormFormik;

CareerFormFormik.propTypes = {
    language: PropTypes.string,
    name: PropTypes.string
};

CareerFormFormik.defaultProps = {
    language: '',
    name: ''
};
