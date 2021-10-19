import React from 'react';
import _ from 'lodash';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';

import {
    Container,
    Image,
    Button
} from "react-bootstrap";

const ImagePanelSection = ({
    className,
    image,
    btnName,
    link,
    title,
    secClass,
}) => {
    const router = useRouter();
    const RenderPanel = () => {
        // const display_txt = title.replace(/\n/g, `\n`);
        return (
        <div className={className}>
            <div className="cta-txt">
                <h2 className="h2" dangerouslySetInnerHTML={{__html: title}}></h2>
                <Button
                    variant="primary"
                    className="red-btn min-size-btn"
                    onClick={() => {
                        router.push(link);
                    }}
                >
                    {btnName}
                </Button>
            </div>
            { image !== '' && 
            <div>
                <Image src={image} alt="" />
            </div>
            }                        
        </div>
        )
    }

    return (
        <> {secClass !== '' ? 
        <section className={secClass}>
            <Container>
                {RenderPanel()}
            </Container>
        </section> : RenderPanel() } </>
    );
};


export default ImagePanelSection;


ImagePanelSection.propTypes = {
    className: PropTypes.string,
    secClass: PropTypes.string,
    image: PropTypes.string,
    btnName: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
};

ImagePanelSection.defaultProps = {
    image: '',
    secClass: '',
};