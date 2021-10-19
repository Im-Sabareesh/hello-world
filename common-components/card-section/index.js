import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import {
    Col,
    Image,
    Card,
    Button
} from "react-bootstrap";

const CardSection = ({
    className,
    fullCard,
    item,
    footerClass
}) => {

    const renderFullCard = () => {
        return (
            <Card className={`${footerClass && 'custom-card'} ${className && className}`}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                <Card.Title>
                    <h3 className="h3 mb-3">{item.title}</h3>
                </Card.Title>
                <Card.Text>{item.subtitle}</Card.Text>
                    {   !footerClass &&
                        <a href="#" onClick={e => e.preventDefault()} className="link-primary">
                            Learn More <Image src="/assets/icons/purple-arrow.svg" alt=" "/>
                        </a>
                    }
                </Card.Body>
                { footerClass && 
                    <Card.Footer className={footerClass}>
                        <a href="#" onClick={(e) => e.preventDefault()} className="link-primary">
                            {item.link}
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <Image src="/assets/icons/card-arrow.svg" alt="" />
                        </a>                   
                    </Card.Footer>
                }
            </Card>
        )
    }

    const renderCard = () => {
        return (
            <Card className={`custom-card ${className && className}`}>
                <Card.Body>
                    <Card.Title>
                        <h3 className="h3"> {item.title}</h3>
                    </Card.Title>
                    <Card.Text>{item.describe}</Card.Text>
                </Card.Body>
                <Card.Footer className="">
                    <Button variant="primary" className="red-btn min-size-btn">
                        Know More
                    </Button>
                </Card.Footer>
            </Card>
        
        )
    }

    return (
        fullCard ? renderFullCard() : renderCard()
    );
};


export default CardSection;

CardSection.propTypes = {
    className: PropTypes.string,
    item: PropTypes.object,
    fullCard: PropTypes.bool,
    footerClass: PropTypes.string,
};

CardSection.defaultProps = {
    fullCard: false
};