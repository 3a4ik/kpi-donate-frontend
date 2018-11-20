import React from 'react';
import { Col, Card, CardImg, CardTitle, CardText, CardFooter, CardBody, Progress } from 'reactstrap';

import DonateModal from 'components/DonateModal'
import "css/cards.css"

const CardComponent = (props) => {
    const fundsText = props.isOpen
        ? `Raised funds: ${props.pMoney} / ${props.pNeeded + ' \u20B4'}`
        : `Successfully collected ${props.pNeeded + ' \u20B4'}!`;

    const cardClass = props.isOpen ? "h-100" : "project-completed-overlay";

    return (
        <Col xs={12} sm={6} lg={4} xl={3} className="mb-5">
            <Card className={cardClass}>
                <CardImg top src={props.pImg} alt={props.pTitle} />
                <Progress className="mt-4 mx-0 rounded-0" color="secondary" value={props.pMoney} max={props.pNeeded} />
                <p className="text-muted mx-0 mb-0">{fundsText}</p>
                <CardBody className="body px-0">
                    <CardTitle tag="h4">{props.pTitle}</CardTitle>
                    <CardText className="text-justify">{props.pDescription}</CardText>
                </CardBody>
                {props.isOpen &&
                    <CardFooter className="d-block mx-auto">
                        <DonateModal
                            pTitle={props.pTitle}
                            pID={props.pID}
                            pDescription={props.pDescription}
                            pImg={props.pImg}
                            pMoney={props.pMoney}
                            pNeeded={props.pNeeded}
                            isOpen={props.isOpen}
                        />
                    </CardFooter>
                }
            </Card>
        </Col>
    );
};

export default CardComponent;