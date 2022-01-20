import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const ModalComponent = ({ children, isShow, hide, mSize, header }) => {
    return (
        <>
            <Modal show={isShow} onHide={hide} size={mSize} centered className="apply-now-modal">
                <Modal.Header className="ps-5" closeButton>
                    <Modal.Title>Apply for a {header.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-lg-5">{children}</Modal.Body>
            </Modal>
        </>
    );
};

export default ModalComponent;

ModalComponent.propTypes = {
    hide: PropTypes.func,
    mSize: PropTypes.string,
    isShow: PropTypes.bool,
    header: PropTypes.object,
};

ModalComponent.defaultProps = {
    isShow: false,
    hide: () => {},
    mSize: 'md',
    header: {},
};
