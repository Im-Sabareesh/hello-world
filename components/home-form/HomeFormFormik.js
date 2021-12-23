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
        firstname: Yup.string().required(
            t('validation.required', {
                name: 'First name',
            })
        ),
        email: Yup.string()
            .required(t('validation.required', { name: 'Email' }))
            .email(t('validation.invalid', { name: 'Email' })),
        phone: Yup.string()
            .required(t('validation.required', { name: 'Phone' }))
            .min(10, t('validation.min', { name: 'Phone', size: 10 }))
            .max(10, t('validation.max', { name: 'Phone', size: 10 })),
        accepTC: Yup.bool().oneOf([true], t('validation.acceptance'), {
            name: 'terms and conditions',
        }),
    });
    const initialValues = {
        firstname: '',
        email: '',
        phone: '',
        description: '',
        accepTC: false,
    };
    const handleVerify = (token) => {
        console.log('token -- > ', token);
    };
    const [loading, setLoading] = React.useState(false);

    return (
        <>
            <div className="home-contact-form mt-4">
                <Formik
                    initialValues={initialValues}
                    validationSchema={basicValidationSchema}
                    onSubmit={(fields, { resetForm }) => {
                        setLoading(true);
                        axios
                            .post('/api/v1/send-email/home', fields)
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
                            <Row className="">
                                <div className="form-group col-md-12">
                                    <BootstrapForm.Label htmlFor="firstname">
                                        {t('home.firstName')}*
                                    </BootstrapForm.Label>
                                    <Field
                                        name="firstname"
                                        type="text"
                                        className={
                                            'form-control' +
                                            (errors.firstname &&
                                            touched.firstname
                                                ? ' is-invalid'
                                                : '')
                                        }
                                    />
                                    <ErrorMessage
                                        name="firstname"
                                        component="div"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <BootstrapForm.Label htmlFor="email">
                                        {t('home.email')}*
                                    </BootstrapForm.Label>
                                    <Field
                                        name="email"
                                        type="text"
                                        className={
                                            'form-control' +
                                            (errors.email && touched.email
                                                ? ' is-invalid'
                                                : '')
                                        }
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <BootstrapForm.Label htmlFor="phone">
                                        {t('home.phone')}*
                                    </BootstrapForm.Label>
                                    <Field
                                        name="phone"
                                        type="number"
                                        className={
                                            'form-control' +
                                            (errors.phone && touched.phone
                                                ? ' is-invalid'
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
                                        className="invalid-feedback"
                                    />
                                </div>
                            </Row>
                            <Row className="">
                                <div className="form-group col-md-12">
                                    <BootstrapForm.Label>
                                        {t('home.weHelpYou')}
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
                                    <Field
                                        type="checkbox"
                                        name="accepTC"
                                        id="accepTC"
                                        className={
                                            'form-check-input ' +
                                            (errors.accepTC && touched.accepTC
                                                ? ' is-invalid'
                                                : '')
                                        }
                                    />
                                    <BootstrapForm.Label
                                        htmlFor="accepTC"
                                        className={
                                            'form-check-label' +
                                            (errors.accepTC && touched.accepTC
                                                ? ' check-invalid'
                                                : '')
                                        }
                                    >
                                        *{t('home.agreeTrems')}
                                    </BootstrapForm.Label>
                                    <ErrorMessage
                                        name="accepTC"
                                        component="div"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-group col-md-5">
                                    <Button
                                        btnVarient="red-btn"
                                        type="submit"
                                        className="btn-lg"
                                        disabled={loading}
                                    >
                                        {t('sendRequest')}
                                    </Button>
                                </div>
                                <div>
                                    <GoogleReCaptcha onVerify={handleVerify} />
                                </div>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default HomeFormFormik;

HomeFormFormik.propTypes = {
    language: PropTypes.string,
};

HomeFormFormik.defaultProps = {
    language: '',
};
