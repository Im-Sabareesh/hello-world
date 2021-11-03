import React from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import _ from 'lodash';

import { axios } from '@libs';
import { Button } from '@components';

const ContactFormFormik = (props) => {

    const basicValidationSchema = Yup.object().shape({
        firstname: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        phone: Yup.string()
            .min(10, 'Contact Number must be at least 10 characters')
            .max(10, 'Contact Number maximum characters is 10')
            .required('Contact Number is required'),
        service: Yup.string()
            .required('Service is required'),
    });
    const initialValues = {
        firstname: '',
        email: '',
        phone: '',
        service: '',
        description: '',
    }
    const handleVerify = (token) => {
        console.log('token -- > ', token);
    };

    // const handleSubmit = (e) => {
    //     const target = e.target;

    //     let body = {};
    //     _.map(target, (t) => (body[t.name] = t.value));
    //     console.log('body', body);
    //     axios
    //         .post('http://localhost:4000/sent-mail', body)
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((err) => console.log(err));
    // };

    return (
        <>
            <div className="getintouch-form mt-5">
                <Formik
                    initialValues={initialValues}
                    validationSchema={basicValidationSchema}
                    onSubmit={fields => {
                        console.log("handle", fields);
                        // handleSubmit(fields);
                        axios
                            .post('http://localhost:4000/sent-mail', fields)
                            .then((response) => {
                                console.log(response);
                            })
                            .catch((err) => console.log(err));
                    }}
                >
                    {({ errors, status, touched, handleSubmit }) => (
                        <Form onSubmit={(event) => {
                            event.preventDefault();
                            handleSubmit(event);
                        }}>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="firstname">Your Name</BootstrapForm.Label>
                                    <Field name="firstname" type="text" className={'form-control' + (errors.firstname && touched.firstname ? ' is-invalid' : '')} />
                                    <ErrorMessage name="firstname" component="div" className="invalid-feedback error-text-padding-left" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="firstName">Your Email</BootstrapForm.Label>
                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback error-text-padding-left" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="phone">Contact Number</BootstrapForm.Label>
                                    <Field name="phone" type="text" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                                    <ErrorMessage name="phone" component="div" className="invalid-feedback error-text-padding-left" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12 select-field">
                                    <BootstrapForm.Label htmlFor="service">Service you are interested in</BootstrapForm.Label>
                                    <Field as="select" name="service" type="text"
                                        className={'form-control' + (errors.contactNumber && touched.contactNumber ? ' is-invalid' : '')}>
                                        <option>Select service</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Field>
                                    <ErrorMessage name="service" component="div" className="invalid-feedback error-text-padding-left" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="description">Your Message</BootstrapForm.Label>
                                    <Field
                                        as="textarea"
                                        className="msg-field form-control"
                                        name="description"
                                        rows={3}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <Button
                                    btnVarient="red-btn"
                                    className="red-btn-shadow btn-lg"
                                    type="submit"
                                >
                                    Send Message
                                </Button>
                            </div>
                            <div>
                                <GoogleReCaptcha
                                    onVerify={handleVerify}
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
};

export default ContactFormFormik;

ContactFormFormik.propTypes = {
    language: PropTypes.string,
};

ContactFormFormik.defaultProps = {
    language: '',
};
