import React from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import i18next from 'i18next';

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
    const t = i18next.t.bind(i18next);

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
            onFileUpload(acceptedFiles, 'touched');
            if (!(acceptedFiles[0].type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
                acceptedFiles[0].type === 'application/pdf' ||
                acceptedFiles[0].type === "application/msword")) {
                    acceptedFiles.splice(acceptedFiles, 1);
            }
        }
    });

    const files = acceptedFiles.map((file) => (
        <div key={file.path} className="uploaded-files">
            <div className="cursor-pointer remove" onClick={(e) => {
                e.stopPropagation();
                remove(file);
                }} >
                <MyImage
                    src={images.closeIcon}
                    alt=" "
                    height={20}
                    width={20}
                />
            </div>
            <p className="file-path">{file.path}</p>
        </div>
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
                    {!acceptedFiles.length && t('fileDropzone.dropFilePlaceholder')}

                    {acceptedFiles.length ? (
                        <>
                            <h5> {t('fileDropzone.uploadedResume')} </h5>
                            {files}
                        </>
                    ) : null}
                </p>
            </div>
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
