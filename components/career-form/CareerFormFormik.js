import React from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button, StyledDropzone } from '@components';

const CareerFormFormik = (props) => {

    const basicValidationSchema = Yup.object().shape({
    });
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        whenStart: '',
        coverLtr: '',
        resume: ''
    }
    const hideModal = () => {
    }

    return (
        <>
            <div className="getintouch-form">
                <Formik
                    initialValues={initialValues}
                    validationSchema={basicValidationSchema}
                    onSubmit={fields => {
                        console.log(fields);
                    }}
                >
                    {({ errors, status, touched }) => (
                        <Form>
                            <div className="row">
                                <div className="form-group col-6">
                                    <BootstrapForm.Label htmlFor="firstName">First Name</BootstrapForm.Label>
                                    <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                    <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group col-6">
                                    <BootstrapForm.Label htmlFor="lastName">Last Name</BootstrapForm.Label>
                                    <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                    <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="firstName">Email</BootstrapForm.Label>
                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                                        placeholder="ex: myname@example.com" />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="appFor">Applying for Position</BootstrapForm.Label>
                                    <Field name="appFor" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="wycs">When can you start?</BootstrapForm.Label>
                                    <Field name="wycs" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="covLetter">Cover Letter</BootstrapForm.Label>
                                    <BootstrapForm.Control
                                        as="textarea"
                                        className="msg-field"
                                        rows={3}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="email">Upload Resume</BootstrapForm.Label>
                                    <StyledDropzone />
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <Button btnVarient="red-btn" className="m-auto career-apply-btn" onClick={() => hideModal()}>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
};

export default CareerFormFormik;

CareerFormFormik.propTypes = {
    language: PropTypes.string,
};

CareerFormFormik.defaultProps = {
    language: '',
};
