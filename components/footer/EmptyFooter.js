import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';

const EmptyFooter = () => {
    const { t } = useTranslation('common');

    return (
        <footer className="contactus-footer py-1">
            <Container>
                <div className="copyrights-section d-md-flex justify-content-between align-items-center text-md-left text-center pt-1">
                    <span className="light-text-color">
                        {t('footer.copyRightsReserved')}
                    </span>
                    <ul className="list-inline position-relative footer-after-line">
                        <li className="list-inline-item px-2">
                            <a href="#" className="light-text-color">
                                {t('privacyPolicy')}
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="light-text-color">
                                {t('termsOfService')}
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
};

export default EmptyFooter;

EmptyFooter.propTypes = {};

EmptyFooter.defaultProps = {};