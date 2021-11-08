import React from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';

import { MyImage } from '@components';
import images from '@components/images';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
};

const activeStyle = {
    borderColor: '#2196f3',
};

const acceptStyle = {
    borderColor: '#00e676',
};

const rejectStyle = {
    borderColor: '#ff1744',
};

const StyledDropzone = ({ onFileUpload , errors, touched}) => {
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        // maxFiles: 1,
        multiple: false,
        onDrop: acceptedFiles => {
            onFileUpload(acceptedFiles)
        }
    });

    const files = acceptedFiles.map((file) => (
        <li key={file.path} className="d-flex justify-content-center justify-content-between">
            <span>{file.path} - {file.size} bytes</span>
            <span className="cursor-pointer" onClick={() => {
                remove(file)
                }} >
                <MyImage
                    src={images.closeIcon}
                    alt=" "
                    height={20}
                    width={20}
                />
            </span>
        </li>
    ));

    const remove = file => {
        acceptedFiles.splice(file, 1);        
        onFileUpload(null);
    };

    const style = React.useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragActive, isDragReject, isDragAccept]
    );

    return (
        <div className="container">
            <div {...getRootProps({ style })}  
                className={
                    'mb-3' +
                    (errors.resume &&
                    touched.resume
                        ? ' is-invalid'
                        : '')
                }>
                <input {...getInputProps()} />
                <p>
                    Drag &apos;n&apos; drop some files here, or click to select
                    files
                </p>
            </div>
            {acceptedFiles.length ? (
                <>
                    <h5>Uploaded Resume</h5>
                    <div className="alert alert-info" role="alert">
                        <ul>{files}</ul>
                    </div>
                </>
            ) : null}
        </div>
    );
};

StyledDropzone.proptypes = {
    onFileUpload: PropTypes.func,
};

StyledDropzone.defaultProps = {
    onFileUpload: () => {},
};

export default StyledDropzone;
