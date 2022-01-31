import React from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import i18next from 'i18next';
import DatePicker from "react-datepicker";

import { Button, StyledDropzone } from '@components';
import { careerAction } from '@redux';
import { useDispatch } from 'react-redux';

import "react-datepicker/dist/react-datepicker.css";

const CareerFormFormik = (props) => {
    const t = i18next.t.bind(i18next);
    const dispatch = useDispatch();

    const basicValidationSchema = Yup.object().shape({
        firstName: Yup.string().required(
            t('validation.required', { name: 'First name' })
        ),
        lastName: Yup.string().required(
            t('validation.required', { name: 'Last name' })
        ),
        email: Yup.string()
            .email(t('validation.invalid', { name: 'Email' }))
            .required(t('validation.required', { name: 'Email' })),
        areaCode: Yup.string()
            .min(2, t('validation.min', { name: 'Area code', size: 2 }))
            .max(5, t('validation.max', { name: 'Area code', size: 5 }))
            .required(t('validation.required', { name: 'Area Code' })),
        phoneNumber: Yup.string()
            .min(10, t('validation.min', { name: 'Phone Number', size: 10 }))
            .max(10, t('validation.max', { name: 'Phone Number', size: 10 }))
            .required(t('validation.required', { name: 'Phone Number' })),
        whenStart: Yup.string().required(
            t('validation.required', { name: 'Start' })
        ),
        position: Yup.string().required(
            t('validation.required', { name: 'Position' })
        ),
        resume: Yup.mixed()
            .required(t('validation.required', { name: 'Resume' }))
            .test('type', t('validation.resumeFormat'), (value) => {
                return (
                    value &&
                    value[0] &&
                    (value[0].type ===
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
                        value[0].type === 'application/pdf' ||
                        value[0].type === 'application/msword')
                );
            }),
    });
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        areaCode: '',
        phoneNumber: '',
        position: props.name || '',
        whenStart: new Date(),
        coverLtr: '',
        resume: null,
    };
    let recaptchaToken;
    const handleVerify = (token) => {
        if (token) {
            recaptchaToken = token;
        }
    };

    return (
        <>
            <div className="getintouch-form">
                <Formik
                    initialValues={initialValues}
                    validationSchema={basicValidationSchema}
                    enableReinitialize
                    onSubmit={(fields) => {
                        fields['recaptchaToken'] = recaptchaToken;
                        dispatch(careerAction.applynow(fields));
                    }}
                >
                    {({
                        errors,
                        values,
                        touched,
                        setFieldValue,
                        handleSubmit,
                    }) => {
                        return (
                            <Form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <BootstrapForm.Label htmlFor="firstName">
                                            {t('careerForm.firstName')} <span className="check-invalid">*</span>
                                        </BootstrapForm.Label>
                                        <Field
                                            name="firstName"
                                            type="text"
                                            className={
                                                'form-control' +
                                                (errors.firstName &&
                                                touched.firstName
                                                    ? ' is-invalid'
                                                    : '')
                                            }
                                        />
                                        <ErrorMessage
                                            name="firstName"
                                            component="div"
                                            className="invalid-feedback text-center"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <BootstrapForm.Label htmlFor="lastName">
                                            {t('careerForm.lastName')} <span className="check-invalid">*</span>
                                        </BootstrapForm.Label>
                                        <Field
                                            name="lastName"
                                            type="text"
                                            className={
                                                'form-control' +
                                                (errors.lastName &&
                                                touched.lastName
                                                    ? ' is-invalid'
                                                    : '')
                                            }
                                        />
                                        <ErrorMessage
                                            name="lastName"
                                            component="div"
                                            className="invalid-feedback text-center"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="firstName">
                                            {t('careerForm.email')} <span className="check-invalid">*</span>
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
                                            placeholder="ex: myname@example.com"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="invalid-feedback text-center"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="appFor" className="d-none d-sm-block">
                                            {t('careerForm.phoneNumber')}
                                        </BootstrapForm.Label>
                                        <div className="row">
                                            <div className="form-group col-sm-3 mb-0">
                                                <div className="form-group mb-0">
                                                    <BootstrapForm.Label htmlFor="areaCode">
                                                        {t('careerForm.areaCode')} <span className="check-invalid">*</span>
                                                    </BootstrapForm.Label>
                                                </div>
                                                <Field
                                                    name="areaCode"
                                                    type="number"
                                                    onKeyDown={(e) =>
                                                        ['e', 'E'].includes(
                                                            e.key
                                                        ) && e.preventDefault()
                                                    }
                                                    className={
                                                        'form-control' +
                                                        (errors.areaCode &&
                                                        touched.areaCode
                                                            ? ' is-invalid'
                                                            : '')
                                                    }
                                                />
                                                <ErrorMessage
                                                    name="areaCode"
                                                    component="div"
                                                    className="invalid-feedback text-center"
                                                />
                                            </div>
                                            <div className="form-group col-1 text-center p-3 mb-0 d-none d-sm-block">
                                                -
                                            </div>
                                            <div className="form-group col col-md-8 mb-0">
                                                <div className="form-group mb-0">
                                                    <BootstrapForm.Label htmlFor="phoneNumber">
                                                        {t('careerForm.phoneNumber')} <span className="check-invalid">*</span>
                                                    </BootstrapForm.Label>
                                                </div>
                                                <Field
                                                    name="phoneNumber"
                                                    type="number"
                                                    onKeyDown={(e) =>
                                                        [
                                                            'e',
                                                            'E',
                                                            '+',
                                                            '-',
                                                        ].includes(e.key) &&
                                                        e.preventDefault()
                                                    }
                                                    className={
                                                        'form-control' +
                                                        (errors.phoneNumber &&
                                                        touched.phoneNumber
                                                            ? ' is-invalid'
                                                            : '')
                                                    }
                                                />
                                                <ErrorMessage
                                                    name="phoneNumber"
                                                    component="div"
                                                    className="invalid-feedback text-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="position">
                                            {t('careerForm.applyPosition')} <span className="check-invalid">*</span>
                                        </BootstrapForm.Label>
                                        <Field
                                            name="position"
                                            type="text"
                                            className={
                                                'form-control' +
                                                (errors.position &&
                                                touched.position
                                                    ? ' is-invalid'
                                                    : '')
                                            }
                                        />
                                        <ErrorMessage
                                            name="position"
                                            component="div"
                                            className="invalid-feedback text-center"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="whenStart">
                                            {t('careerForm.whenStart')} <span className="check-invalid">*</span>
                                        </BootstrapForm.Label>
                                        {/* <Field
                                            className={
                                                'form-control' +
                                                (errors.whenStart &&
                                                touched.whenStart
                                                    ? ' is-invalid'
                                                    : '')
                                            }
                                            name="whenStart"
                                            type="text"
                                        /> */}
                                        <DatePicker className={
                                                'form-control input-datepicker' + (errors.whenStart && touched.whenStart ? ' is-invalid' : '')
                                            } selected={values.whenStart} autoComplete="off" onKeyDown={e => e.preventDefault()}
                                            onChange={(date) => setFieldValue('whenStart', date)} />
                                        {/* <InputMask
                                            className={
                                                'form-control' +
                                                (errors.whenStart &&
                                                touched.whenStart
                                                    ? ' is-invalid'
                                                    : '')
                                            }
                                            mask="99/99/9999"
                                            onBlur={(e) => {
                                                setFieldValue(
                                                    'whenStart',
                                                    e.target.value
                                                );
                                            }}
                                        /> */}
                                        <ErrorMessage
                                            name="whenStart"
                                            component="div"
                                            className="invalid-feedback text-center"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="covLetter">
                                            {t('careerForm.coverLetter')}
                                        </BootstrapForm.Label>
                                        <Field
                                            as="textarea"
                                            className="msg-field form-control"
                                            name="coverLtr"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12 modal-upload-file">
                                        <BootstrapForm.Label htmlFor="email">
                                            {t('careerForm.uploadResume')} <span className="check-invalid">*</span>
                                        </BootstrapForm.Label>
                                        <StyledDropzone
                                            name="resume"
                                            errors={errors}
                                            touched={touched}
                                            onFileUpload={(file, type) => {
                                                if (type) {
                                                    touched.resume = true;
                                                }
                                                setFieldValue('resume', file);
                                            }}
                                        />
                                        {errors.resume && touched.resume ? (
                                            <p
                                                className={
                                                    'invalid-feedback text-center d-block mb-0'
                                                }
                                            >
                                                {errors.resume}
                                            </p>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="form-group text-center mb-sm-4 mb-2">
                                    <Button
                                        btnVarient="red-btn"
                                        type="submit"
                                        className="m-auto career-apply-btn"
                                    >
                                        {t('careerForm.submit')}
                                    </Button>
                                </div>
                                <div>
                                    <GoogleReCaptcha onVerify={handleVerify} />
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </>
    );
};

export default CareerFormFormik;

CareerFormFormik.propTypes = {
    language: PropTypes.string,
    name: PropTypes.string,
};

CareerFormFormik.defaultProps = {
    language: '',
    name: '',
};
