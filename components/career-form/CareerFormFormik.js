import React from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import i18next from 'i18next';
import InputMask from 'react-input-mask';

import { Button, StyledDropzone } from '@components';

const CareerFormFormik = (props) => {
    const t = i18next.t.bind(i18next);

    const basicValidationSchema = Yup.object().shape({
        firstName: Yup.string().required(
            t('validation.requied', { name: 'First name' })
        ),
        lastName: Yup.string().required(
            t('validation.requied', { name: 'Last name' })
        ),
        email: Yup.string()
            .email(t('validation.requied', { name: 'Email' }))
            .required(t('validation.requied', { name: 'Email' })),
        areaCode: Yup.number()
            .min(2, t('validation.min', { name: 'Area code', size: 2 }))
            .max(3, t('validation.max', { name: 'Area code', size: 3 }))
            .required(t('validation.requied', { name: 'Area Code' }))

            .typeError(t('validation.invalid', { name: 'Area code' })),
        phoneNumber: Yup.number()
            .min(10, t('validation.min', { name: 'Phone Number', size: 10 }))
            .max(10, t('validation.max', { name: 'Phone Number', size: 10 }))
            .required(t('validation.requied', { name: 'Phone Number' }))
            .typeError(t('validation.invalid', { name: 'Phone Number' })),

        whenStart: Yup.date()
            .required(t('validation.requied', { name: 'Start Date' }))
            .typeError(t('validation.invalid', { name: 'Start Date' })),

        resume: Yup.mixed()
        .required(t('validation.requied', { name: 'Resume' }))
        .test("type", "Only the following formats are accepted: .docx, .pdf and .doc", (value) => {
            return value && (
                value[0].type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
                value[0].type === 'application/pdf' ||
                value[0].type === "application/msword"
            );
        }),
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
        resume: null,
    };

    return (
        <>
            <div className="getintouch-form">
                <Formik
                    initialValues={initialValues}
                    validationSchema={basicValidationSchema}
                    enableReinitialize
                    onSubmit={(fields) => {
                        console.log(fields);
                    }}
                >
                    {({
                        errors,
                        values,
                        touched,
                        setFieldValue,
                        handleSubmit,
                    }) => {
                        console.log(values);
                        return (
                            <Form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="form-group col-6">
                                        <BootstrapForm.Label htmlFor="firstName">
                                            {t('careerForm.firstName')}
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
                                    <div className="form-group col-6">
                                        <BootstrapForm.Label htmlFor="lastName">
                                            {t('careerForm.lastName')}
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
                                            {t('careerForm.email')}
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
                                        <BootstrapForm.Label htmlFor="appFor">
                                            {t('careerForm.phoneNumber')}
                                        </BootstrapForm.Label>
                                        <div className="row mb-0">
                                            <div className="form-group col-3 mb-0">
                                                <BootstrapForm.Label htmlFor="areaCode">
                                                    {t('careerForm.areaCode')}
                                                </BootstrapForm.Label>
                                            </div>
                                            <div className="form-group col-1 text-center mb-0"></div>
                                            <div className="form-group col-6 mb-0">
                                                <BootstrapForm.Label htmlFor="phoneNumber">
                                                    {t(
                                                        'careerForm.phoneNumber'
                                                    )}
                                                </BootstrapForm.Label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-3">
                                                <Field
                                                    name="areaCode"
                                                    type="text"
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
                                            <div className="form-group col-1 text-center p-3">
                                                -
                                            </div>
                                            <div className="form-group col col-md-8">
                                                <Field
                                                    name="phoneNumber"
                                                    type="text"
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
                                        <BootstrapForm.Label htmlFor="appFor">
                                            {t('careerForm.applyPosition')}
                                        </BootstrapForm.Label>
                                        <Field
                                            disabled
                                            name="position"
                                            type="text"
                                            className="form-control"
                                            value
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="whenStart">
                                            {t('careerForm.whenStart')}
                                        </BootstrapForm.Label>

                                        <InputMask
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
                                            // onChange={(val) =>
                                            //     // setFieldValue(
                                            //     //     'whenStart',
                                            //     //     value
                                            //     // )
                                            // }
                                        />
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
                                    <div className="form-group col-12">
                                        <BootstrapForm.Label htmlFor="email">
                                            {t('careerForm.uploadResume')}
                                        </BootstrapForm.Label>
                                        <StyledDropzone
                                            name="resume"
                                            errors={errors}
                                            touched={touched}
                                            onFileUpload={(file) => {
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
                                <div className="form-group text-center">
                                    <Button
                                        btnVarient="red-btn"
                                        type="submit"
                                        className="m-auto career-apply-btn"
                                    >
                                        {t('careerForm.submit')}
                                    </Button>
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
