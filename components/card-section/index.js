import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';
import { Button, MyImage } from '@components';
import images from '@components/images';

const CardSection = ({ className, fullCard, item, footerClass }) => {
    const renderFullCard = () => {
        return (
            <Card className={`${footerClass && 'custom-card'} ${className}`}>
                <MyImage
                    src={item.image}
                    alt=""
                    className="card-img-top"
                    loading="lazy"
                    height={!footerClass ? 251 : 221}
                    width={416}
                />
                <Card.Body>
                    <Card.Title>
                        <h3 className="h3 mb-3">{item.title}</h3>
                    </Card.Title>
                    <Card.Text>{item.subtitle}</Card.Text>
                    {!footerClass && (
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="link-primary d-flex"
                        >
                            Learn More
                            <div className="ps-1">
                                <MyImage
                                    src={images.purpleArrow}
                                    alt=" "
                                    width={11}
                                    height={10}
                                />
                            </div>
                        </a>
                    )}
                </Card.Body>
                {footerClass && (
                    <Card.Footer className={footerClass}>
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="link-primary"
                        >
                            {item.link}
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <MyImage
                                src={images.purpleArrow}
                                alt=""
                                width={16}
                                height={14}
                            />
                        </a>
                    </Card.Footer>
                )}
            </Card>
        );
    };

    const renderCard = () => {
        return (
            <Card className={`custom-card ${className}`}>
                {item.image && (
                    <MyImage
                        src={item.image}
                        alt=""
                        loading="lazy"
                        className="card-img-top"
                        height={220}
                        width={416}
                    />
                )}
                <Card.Body>
                    <Card.Title>
                        <h3 className="h3"> {item.title}</h3>
                    </Card.Title>
                    <Card.Text>{item.describe}</Card.Text>
                </Card.Body>
                <Card.Footer className="">
                    <Button
                        btnVarient="red-btn"
                        className={`min-size-btn ${
                            item.image && 'btn btn-primary w-100'
                        }`}
                    >
                        Know More
                    </Button>
                </Card.Footer>
            </Card>
        );
    };

    return fullCard ? renderFullCard() : renderCard();
};

export default CardSection;

CardSection.propTypes = {
    className: PropTypes.string,
    item: PropTypes.object,
    fullCard: PropTypes.bool,
    footerClass: PropTypes.string,
};

CardSection.defaultProps = {
    fullCard: false,
    className: '',
    item: {},
    footerClass: '',
};
