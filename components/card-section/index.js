import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import i18next from 'i18next';

import { Card } from 'react-bootstrap';
import { Button, MyImage } from '@components';
import images from '@components/images';

const CardSection = ({ className, fullCard, item, footerClass, footer, cardBodyCls}) => {
    const [state, setState] = React.useState(false);
    const t = i18next.t.bind(i18next);

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
                    <Card.Text dangerouslySetInnerHTML={
                        {__html: item.subtitle}
                    }></Card.Text>
                    {!footerClass && (
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="link-primary d-flex"
                        >
                            {t('learnMore')}
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
                {footerClass && item.link && (
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
            <Card className={`${!cardBodyCls && 'custom-card'} ${className}`}>
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
                <Card.Body className={cardBodyCls}>
                    <Card.Title>
                        <h3 className="h3"> {item.title}</h3>
                    </Card.Title>
                    <Card.Text className={`${state ? 'show-more' : ''} `}>
                        {item.describe}
                    </Card.Text>
                </Card.Body>
                {!footer && <Card.Footer>
                    <Button
                        btnVarient="red-btn"
                        className={`min-size-btn ${
                            item.image && 'btn btn-primary w-100'
                        }`}
                        onClick={() => setState(!state)}
                    >
                        {state ? t('knowLess') : t('knowMore')}
                    </Button>
                </Card.Footer> }
            </Card>
        );
    };

    return typeof window !== 'undefined'
        ? fullCard
            ? renderFullCard()
            : renderCard()
        : null;
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
