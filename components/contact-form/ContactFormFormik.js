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
        firstname: Yup.string().required(
            t('validation.required', { name: 'Name' })
        ),
        email: Yup.string()
            .required(t('validation.required', { name: 'Email' }))
            .email(t('validation.invalid', { name: 'Email' })),
        phone: Yup.string()
            .required(t('validation.required', { name: 'Phone' }))
            .min(10, t('validation.min', { name: 'Phone', size: 10 }))
            .max(10, t('validation.max', { name: 'Phone', size: 10 })),
        service: Yup.string().required(
            t('validation.required', { name: 'Service' })
        ),
        description: Yup.string().required(
            t('validation.required', { name: 'Message' })
        ),
    });
    const initialValues = {
        firstname: '',
        email: '',
        phone: '',
        service: 'Interested in',
        description: '',
    };
    const handleVerify = (token) => {
        console.log('token -- > ', token);
    };
    const [loading, setLoading] = React.useState(false);

    return (
        <>
            <div className="getintouch-form mt-5">
                <Formik
                    initialValues={initialValues}
                    validationSchema={basicValidationSchema}
                    onSubmit={(fields, { resetForm }) => {
                        setLoading(true);
                        axios
                            .post('/api/v1/send-email/contact', fields)
                            .then((response) => {
                                setLoading(false);
                                toaster('Form Submitted .!', 'success');
                                resetForm({ values: '' });
                            })
                            .catch((err) => {
                                console.log(err);
                                setLoading(false);
                            });
                    }}
                >
                    {({ errors, status, touched, handleSubmit }) => (
                        <Form
                            onSubmit={(event) => {
                                event.preventDefault();
                                handleSubmit(event);
                            }}
                        >
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="firstname">
                                        {t('contactUsForm.yourName')}
                                    </BootstrapForm.Label>
                                    <Field
                                        name="firstname"
                                        type="text"
                                        className={
                                            'form-control' +
                                            (errors.firstname &&
                                            touched.firstname
                                                ? ' is-invalid is-invalid-border'
                                                : '')
                                        }
                                    />
                                    <ErrorMessage
                                        name="firstname"
                                        component="div"
                                        className="invalid-feedback error-text-padding-left"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="email">
                                        {t('contactUsForm.yourEmail')}
                                    </BootstrapForm.Label>
                                    <Field
                                        name="email"
                                        type="text"
                                        className={
                                            'form-control' +
                                            (errors.email && touched.email
                                                ? ' is-invalid is-invalid-border'
                                                : '')
                                        }
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="invalid-feedback error-text-padding-left"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="phone">
                                        {t('contactUsForm.contactNumber')}
                                    </BootstrapForm.Label>
                                    <Field
                                        name="phone"
                                        type="number"
                                        className={
                                            'form-control' +
                                            (errors.phone && touched.phone
                                                ? ' is-invalid is-invalid-border'
                                                : '')
                                        }
                                        onKeyDown={(e) =>
                                            ['e', 'E', '+', '-'].includes(
                                                e.key
                                            ) && e.preventDefault()
                                        }
                                    />
                                    <ErrorMessage
                                        name="phone"
                                        component="div"
                                        className="invalid-feedback error-text-padding-left"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12 select-field">
                                    <BootstrapForm.Label htmlFor="service">
                                        {t('contactUsForm.serviceInterestedIn')}
                                    </BootstrapForm.Label>
                                    <Field
                                        as="select"
                                        name="service"
                                        type="text"
                                        className={
                                            'form-control' +
                                            (errors.service && touched.service
                                                ? ' is-invalid is-invalid-border'
                                                : '')
                                        }
                                    >
                                        {/* <option>
                                            {t('contactUsForm.selectService')}
                                        </option> */}
                                        <option value={t('contactUsForm.serviceOptions.interestedIn')}>{t('contactUsForm.serviceOptions.interestedIn')}</option>
                                        <option value={t('contactUsForm.serviceOptions.freeConsultation')}>{t('contactUsForm.serviceOptions.freeConsultation')}</option>
                                        <option value={t('contactUsForm.serviceOptions.projectDiscussion')}>{t('contactUsForm.serviceOptions.projectDiscussion')}</option>
                                        <option value={t('contactUsForm.serviceOptions.training')}>{t('contactUsForm.serviceOptions.training')}</option>
                                        <option value={t('contactUsForm.serviceOptions.careers')}>{t('contactUsForm.serviceOptions.careers')}</option>
                                    </Field>
                                    <ErrorMessage
                                        name="service"
                                        component="div"
                                        className="invalid-feedback error-text-padding-left"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-12">
                                    <BootstrapForm.Label htmlFor="mesdescriptionsage">
                                        {t('contactUsForm.yourMsg')}
                                    </BootstrapForm.Label>
                                    <Field
                                        as="textarea"
                                        name="description"
                                        rows={3}
                                        className={
                                            'msg-field form-control' +
                                            (errors.description &&
                                            touched.description
                                                ? ' is-invalid is-invalid-border'
                                                : '')
                                        }
                                    />
                                    <ErrorMessage
                                        name="description"
                                        component="div"
                                        className="invalid-feedback error-text-padding-left"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <Button
                                    btnVarient="red-btn"
                                    className="red-btn-shadow btn-lg"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {t('contactUsForm.sendMsg')}
                                </Button>
                            </div>
                            <div>
                                <GoogleReCaptcha onVerify={handleVerify} />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default ContactFormFormik;

ContactFormFormik.propTypes = {
    language: PropTypes.string,
};

ContactFormFormik.defaultProps = {
    language: '',
};
