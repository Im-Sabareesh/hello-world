import React from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import _ from 'lodash';
import i18next from 'i18next';

import { axios } from '@libs';
import { Button, toaster } from '@components';

const ContactFormFormik = (props) => {
    const t = i18next.t.bind(i18next);

    const basicValidationSchema = Yup.object().shape({
        firstname: Yup.string()
            .required(t('validations.nameRequired')),
        email: Yup.string()
            .email(t('validations.emailInvalid'))
            .required(t('validations.emailRequired')),
        phone: Yup.string()
            .min(10, t('validations.conactMin'))
            .max(10, t('validations.conactMax'))
            .required(t('validations.contactRequired')),
        service: Yup.string()
            .required(t('validations.serviceRequired')),
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

    return (
        <>
            <div className="getintouch-form mt-5">
                <Formik
                    initialValues={initialValues}
                    validationSchema={basicValidationSchema}
                    onSubmit={(fields, { resetForm }) => {
                        axios
                            .post('sent-mail', fields)
                            .then((response) => {
                                toaster('Form Submitted .!', 'success');
                                resetForm({ values: '' })
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
                                    <BootstrapForm.Label htmlFor="firstname">
                                        {t(
                                            'contactUsForm.yourName'
                                        )}
                                    </BootstrapForm.Label>
                                    <Field name="firstname" type="text" className={'form-control' + (errors.firstname && touched.firstname ? ' is-invalid is-invalid-border' : '')} />
                                    <ErrorMessage name="firstname" component="div" className="invalid-feedback error-text-padding-left" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="email">
                                        {t(
                                            'contactUsForm.yourEmail'
                                        )}
                                    </BootstrapForm.Label>
                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid is-invalid-border' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback error-text-padding-left" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="phone">
                                        {t(
                                            'contactUsForm.contactNumber'
                                        )}
                                    </BootstrapForm.Label>
                                    <Field name="phone" type="number" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid is-invalid-border' : '')} />
                                    <ErrorMessage name="phone" component="div" className="invalid-feedback error-text-padding-left" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12 select-field">
                                    <BootstrapForm.Label htmlFor="service">
                                        {t(
                                            'contactUsForm.serviceInterestedIn'
                                        )}
                                    </BootstrapForm.Label>
                                    <Field as="select" name="service" type="text"
                                        className={'form-control' + (errors.service && touched.service ? ' is-invalid is-invalid-border' : '')}>
                                        <option>
                                            {t(
                                                'contactUsForm.selectService'
                                            )}
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Field>
                                    <ErrorMessage name="service" component="div" className="invalid-feedback error-text-padding-left" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="description">
                                        {t(
                                            'contactUsForm.yourMsg'
                                        )}
                                    </BootstrapForm.Label>
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
                                    {t(
                                        'contactUsForm.sendMsg'
                                    )}
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
