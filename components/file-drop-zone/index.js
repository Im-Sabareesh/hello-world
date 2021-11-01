import React from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
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

const StyledDropzone = ({ onFileUpload }) => {
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
    });

    console.log(acceptedFiles);
    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    React.useEffect(() => {
        onFileUpload(acceptedFiles[0]);
        return () => {
            console.log('on unmount -> ');
        };
    }, [acceptedFiles]);

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
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            {acceptedFiles.length ? (
                <>
                    <h5>Selected File</h5>
                    <ul>{files}</ul>
                </>
            ) : null}
        </div>
    );
};

StyledDropzone.proptypes = {
    onFileUpload: PropTypes.func,
};

StyledDropzone.defaultProps = {
    onFileUpload: () => { },
};

export default StyledDropzone;