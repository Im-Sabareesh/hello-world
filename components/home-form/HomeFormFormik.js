import React from 'react';
import { Form as BootstrapForm, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import _ from 'lodash';
import i18next from 'i18next';

import { axios } from '@libs';
import { Button, toaster } from '@components';

const HomeFormFormik = (props) => {
    const t = i18next.t.bind(i18next);

    const basicValidationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        phone: Yup.string()
            .min(10, 'Phone Number must be at least 10 characters')
            .max(10, 'Phone Number maximum characters is 10')
            .required('Phone Number is required'),
        accepTC: Yup.bool().oneOf([true], 'Please accept the terms and conditions')
    });
    const initialValues = {
        firstName: '',
        email: '',
        phone: '',
        description: '',
        accepTC: false,
    }
    const handleVerify = (token) => {
        console.log('token -- > ', token);
    };

    return (
        <>
            <div className="home-contact-form mt-4">
                <Formik
                    initialValues={initialValues}
                    validationSchema={basicValidationSchema}
                    onSubmit={(fields, {resetForm}) => {
                        axios
                            .post('sent-mail', fields)
                            .then((response) => {
                                toaster('Form Submitted .!', 'success');
                                resetForm({ values: '' })
                            })
                            .catch((err) => {
                                console.log(err)
                            });
                    }}
                >
                    {({ errors, status, touched, handleSubmit }) => (
                        <Form onSubmit={(event) => {
                            event.preventDefault();
                            handleSubmit(event);
                        }}>
                            <Row className="">
                                <div className="form-group col-md-12">
                                    <BootstrapForm.Label htmlFor="firstName">
                                        {t(
                                            'home.firstName'
                                        )}
                                        *
                                    </BootstrapForm.Label>
                                    <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                    <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group col-md-6">
                                    <BootstrapForm.Label htmlFor="email">
                                        {t(
                                            'home.email'
                                        )}
                                        *
                                    </BootstrapForm.Label>
                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group col-md-6">
                                    <BootstrapForm.Label htmlFor="phone">
                                        {t(
                                            'home.phone'
                                        )}
                                        *
                                    </BootstrapForm.Label>
                                    <Field name="phone" type="number" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                                    <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                                </div>
                            </Row>
                            <Row className="">
                                <div className="form-group col-md-12">
                                    <BootstrapForm.Label>
                                        {t(
                                            'home.weHelpYou'
                                        )}
                                    </BootstrapForm.Label>
                                    <Field
                                        as="textarea"
                                        rows={2}
                                        name="description"
                                        className="form-control"
                                    />
                                </div>
                            </Row>
                            <Row className="mt-3">
                                <div className="form-group col-md-7 form-check">
                                    <Field type="checkbox" name="accepTC" id="accepTC" className={'form-check-input ' + (errors.accepTC && touched.accepTC ? ' is-invalid' : '')} />
                                    <BootstrapForm.Label htmlFor="accepTC" className={"form-check-label" + (errors.accepTC && touched.accepTC ? ' check-invalid' : '')}>
                                        *
                                        {t(
                                            'home.agreeTrems'
                                        )}
                                    </BootstrapForm.Label>
                                    <ErrorMessage name="accepTC" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group col-md-5">
                                    <Button
                                        btnVarient="red-btn"
                                        type="submit"
                                        className="btn-lg"
                                    >
                                        {t(
                                            'home.sendRequestBtn'
                                        )}
                                    </Button>
                                </div>
                                <div>
                                    <GoogleReCaptcha
                                        onVerify={
                                            handleVerify
                                        }
                                    />
                                </div>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
};

export default HomeFormFormik;

HomeFormFormik.propTypes = {
    language: PropTypes.string,
};

HomeFormFormik.defaultProps = {
    language: '',
};
