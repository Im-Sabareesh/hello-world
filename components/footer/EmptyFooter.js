import React from 'react';
import { Container } from 'react-bootstrap';
import i18next from 'i18next';
const EmptyFooter = () => {
    const t = i18next.t.bind(i18next);

    return (
        <footer className="contactus-footer py-1">
            <Container>
                <div className="copyrights-section d-md-flex justify-content-between align-items-center text-md-left text-center pt-1">
                    <span className="light-text-color">
                        {t('footer.copyRightsReserved')}
                    </span>
                </div>
            </Container>
        </footer>
    );
};

export default EmptyFooter;

EmptyFooter.propTypes = {};

EmptyFooter.defaultProps = {};
