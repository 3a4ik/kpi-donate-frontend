import React from 'react';
import { Col, Card, CardImg, CardTitle, CardText, CardFooter, CardBody, Progress } from 'reactstrap';

import DonateModal from 'components/DonateModal'
import "css/cards.css"

const CardComponent = (props) => {
    return (
        <Col xs={12} sm={6} lg={4} xl={3} className="mb-5">
            <Card className="h-100">
                <CardImg top src={props.pImg} alt={props.pTitle} />
                <Progress className="mt-4 mx-0 rounded-0" color="secondary" value={props.pMoney} max={props.pNeeded} />
                <p className="text-muted mx-0 mb-0">Raised funds: {props.pMoney} / {props.pNeeded + ' \u20B4'}</p>
                <CardBody className="body px-0">
                    <CardTitle tag="h4">{props.pTitle}</CardTitle>
                    <CardText className="text-justify">{props.pDescription}</CardText>
                </CardBody>
                <CardFooter className="d-block mx-auto">
                    <DonateModal
                        pTitle={props.pTitle}
                        pID={props.pID}
                        pSlug={props.pSlug}
                        pDescription={props.pDescription}
                        pImg={props.pImg}
                        pMoney={props.pMoney}
                        pNeeded={props.pNeeded}/>
                </CardFooter>
            </Card>
        </Col>
    );
};

export default CardComponent;