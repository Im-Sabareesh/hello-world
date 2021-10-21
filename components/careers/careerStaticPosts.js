import React from 'react';
import PropTypes from 'prop-types';
export default function CareerStaticPosts({ content }) {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
}

CareerStaticPosts.propTypes = {
    content: PropTypes.string,
};

CareerStaticPosts.defaultProps = {
    content: '',
};
