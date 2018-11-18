import React from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, Card, CardBody, CardTitle, CardImg, CardText, Progress, FormGroup, Label, Input } from 'reactstrap';

import PaymentForm from 'components/PaymentForm'

export default class DonateModal extends React.Component {
    state = {
        modal: false,
        donationAmount: 0,
        donatedSuccessfully: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onDonateAmountChange = (e) => {
        const amount = e.target.value !== '' ? e.target.value : 0;

        this.setState(() => ({
            donationAmount: amount
        }));
        
    };

    onDonateAmountKeyDown = (e) => {
        if (isNaN(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
            e.preventDefault();
        }
    };

    makeDonation = () => {
        this.setState(() => ({
            donatedSuccessfully: true
        }));
    };

    render() {
        if (this.state.donatedSuccessfully) {
            return (
                <div>
                    <Button className="card-link py-3 px-5 text-uppercase rounded-0" role="button" onClick={this.toggle}>Upload image</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} size='lg' centered>
                        <ModalHeader className="d-inline-block text-center" toggle={this.toggle}>Thank you!</ModalHeader>
                        <ModalBody>
                            <div>TODO: upload image</div>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }

        return (
            <div>
                { this.props.isOpen &&
                    <Button className="card-link py-3 px-5 text-uppercase rounded-0" role="button" onClick={this.toggle}>Donate</Button>
                }
                <Modal isOpen={this.state.modal} toggle={this.toggle} size='lg' centered>
                    <ModalHeader className="d-inline-block text-center" toggle={this.toggle}>Donation</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col md={{size: 6, order: 2}} className="justify-content-center">
                                <Card className="text-center">
                                    <CardImg top src={this.props.pImg} alt={this.props.pTitle} />
                                    <Progress className="mt-4 mx-0 rounded-0" color="secondary" value={this.props.pMoney} max={this.props.pNeeded} />
                                    <p className="text-muted mx-0 mb-0">Raised funds: {this.props.pMoney} / {this.props.pNeeded + ' \u20B4'}</p>
                                    <CardBody className="px-0">
                                        <CardTitle tag="h4">{this.props.pTitle}</CardTitle>
                                        <CardText className="text-justify">{this.props.pDescription}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={{size: 6, order: 1}}>
                                    <FormGroup>
                                        <Label for="userName">Name</Label>
                                        <Input type="text" name="username" id="userName" placeholder="John Doe" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="donationAmount">How much money do you want to donate? In UAH ({'\u20B4'})</Label>
                                    <Input 
                                        onChange={this.onDonateAmountChange}
                                        onKeyDown={this.onDonateAmountKeyDown}
                                        type="text" 
                                        name="donationAmount" 
                                        id="donationAmount" 
                                        placeholder="100" />
                                    </FormGroup>
                                    <FormGroup className="py-3 mt-2">
                                        <PaymentForm 
                                            name={this.props.pTitle}
                                            description={this.props.pDescription}
                                            amount={this.state.donationAmount}
                                            projectId={this.props.pID}
                                            makeDonation={this.makeDonation} />
                                    </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}