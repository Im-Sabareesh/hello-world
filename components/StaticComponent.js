import React from 'react';
import PropTypes from 'prop-types';
export default function StaticComponent({ content }) {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
}

StaticComponent.propTypes = {
    content: PropTypes.string,
};

StaticComponent.defaultProps = {
    content: '',
};
