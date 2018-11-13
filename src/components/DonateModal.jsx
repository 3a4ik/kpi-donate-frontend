import React from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, Card, CardBody, CardTitle, CardImg, CardText, Progress, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class DonateModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button className="card-link py-3 px-5 text-uppercase rounded-0" role="button" onClick={this.toggle}>Donate</Button>
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
                                <Form>
                                    <FormGroup>
                                        <Label for="userName">Name</Label>
                                        <Input type="text" name="username" id="userName" placeholder="John Doe" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="userMail">Email</Label>
                                        <Input type="email" name="email" id="userMail" placeholder="mail@example.com" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="userCard">Card number</Label>
                                        <Input type="text" name="userCard" id="userCard" placeholder="Enter 16 digits (5375 0000 0000 0000)" />
                                    </FormGroup>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="userMonth">Month</Label>
                                                <Input type="select" name="userMonth" id="userCard">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option selected>11</option>
                                                    <option>12</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="userYear">Year</Label>
                                                <Input type="select" name="userYear" id="userYear">
                                                    <option>18</option>
                                                    <option>19</option>
                                                    <option>20</option>
                                                    <option>21</option>
                                                    <option>22</option>
                                                    <option>23</option>
                                                    <option>24</option>
                                                    <option>25</option>
                                                    <option>26</option>
                                                    <option>27</option>
                                                    <option>28</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label for="userSec">CVV</Label>
                                        <Input type="password" name="userSec" id="userSec" placeholder="" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="userCard">How much money do you want to donate? In UAH ({'\u20B4'})</Label>
                                        <Input type="text" name="userCard" id="userCard" placeholder="100" />
                                    </FormGroup>
                                    <FormGroup className="py-3 mt-2">
                                        <Button className="rounded-0 btn-block">Donate</Button>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </ModalBody>

                    {/*<ModalFooter>*/}
                        {/*<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}*/}
                        {/*<Button color="secondary" onClick={this.toggle}>Cancel</Button>*/}
                    {/*</ModalFooter>*/}
                </Modal>
            </div>
        );
    }
}