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
    btnClass,
    data,
    footerCls
}) => {

    const RenderCard = (item) => {
        return (
            <Col md={6} lg={4} key={_.uniqueId()}>
                <Card className={className}>
                { btnClass !== '' ? <>
                    <Card.Body>
                        <Card.Title>
                            <h3 className="h3"> {item.title}</h3>
                        </Card.Title>
                        <Card.Text>{item.describe}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="">
                        <Button variant="primary" className={btnClass}>
                            Know More
                        </Button>
                    </Card.Footer> </> : <>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                    <Card.Title>
                        <h3 className="h3 mb-3">{item.title}</h3>
                    </Card.Title>
                    <Card.Text>{item.subtitle}</Card.Text>
                        {footerCls === '' && <a href="#" onClick={e => e.preventDefault()} className="link-primary">
                            Learn More <Image src="/assets/icons/purple-arrow.svg" alt=" "/>
                        </a>}
                    </Card.Body> 
                    {footerCls !== '' && <Card.Footer className="d-flex justify-content-between">
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="link-primary"
                        >
                            {item.link}
                        </a>

                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                        >
                            <Image
                                src="/assets/icons/card-arrow.svg"
                                alt=""
                            />
                        </a>
                    </Card.Footer> }
                    </>
                }
                </Card>
            </Col>
        )
    }

    return (
        typeof data === 'string' ?
        RenderCard(data) :
        _.map(data, (item) => (RenderCard(item)))
    );
};


export default CardSection;

CardSection.propTypes = {
    className: PropTypes.string,
    // data: PropTypes.string || PropTypes.object,
    btnClass: PropTypes.string,
    footerCls: PropTypes.string,
};

CardSection.defaultProps = {
    btnClass: '',
    footerCls: ''
};