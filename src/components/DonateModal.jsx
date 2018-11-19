import React from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, Card, CardBody, CardTitle, CardImg, CardText, Progress, FormGroup, Label, Input, Form } from 'reactstrap';

import PaymentForm from 'components/PaymentForm'

import Compressor from 'compressorjs';
import axios from 'axios'

import { INDEX } from 'config/routes'

export default class DonateModal extends React.Component {
    state = {
        modal: false,
        donationAmount: 0,
        donatedSuccessfully: false,
        token: '',
        donates: [],
        donatesLoading: true
    };
    userImage = React.createRef();

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

    makeDonation = (resToken) => {
        const token = resToken;
        this.setState(() => ({
            donatedSuccessfully: true,
            token
        }));
    };

    getBase64 = (file) => (
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
    );

    handleImageUpload = (e) => {
        e.preventDefault();

        if (this.userImage.current.files.length === 0) {
            alert("Please, select an image");
        } else {
            if (
                this.userImage.current.files[0].type !== 'image/jpeg'
                && this.userImage.current.files[0].type !== 'image/png'
                && this.userImage.current.files[0].type !== 'image/bmp'
            ) {
                alert("Image file is invalid");
            } else {
                const getBase64 = this.getBase64;
                const token = this.state.token;

                new Compressor(this.userImage.current.files[0], {
                    width: 75,
                    height: 75,
                    success(result) {
                        getBase64(result)
                            .then((base64Img) => {
                                axios.post('https://kpi-donate.herokuapp.com/donate/image', {
                                    image: base64Img,
                                    token
                                })
                                    .then((res) => {
                                        window.location.replace(INDEX);
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                            });
                    },
                    error(err) {
                        console.log(err.message);
                    },
                });
            }
        }
    };

    componentDidMount = () => {
        axios.get('https://kpi-donate.herokuapp.com/project/' + this.props.pID)
            .then((res) => {
                if (res.data) {
                    const donates = res.data.donates;

                    this.setState(() => ({
                        donates,
                        donatesLoading: false
                    }));
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        if (this.state.donatedSuccessfully) {
            return <div>
                <Button className="card-link py-3 px-5 text-uppercase rounded-0" role="button" onClick={this.toggle}>Upload image</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size='lg' centered>
                    <ModalHeader className="d-inline-block text-center" toggle={this.toggle}>Thank you!</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col md={{size: 6, order: 2}} className="justify-content-center">
                                <Form onSubmit={this.handleImageUpload}>
                                    <FormGroup>
                                        <Label for="userImage" className="rounded-0 card-link p-2">Upload own avatar</Label>
                                        <input type="file" id="userImage" className="file-uploader" ref={this.userImage} accept="image/*" />
                                    </FormGroup>

                                    <Button type="submit" className="card-link py-3 px-5 text-uppercase rounded-0" role="button">Submit</Button>
                                </Form>
                            </Col>
                            <Col md={{size: 6, order: 1}}>
                                <h4>Thank you for your donation!</h4>
                                <h5>Now you can upload your photo or use default.</h5>
                                <h4>KPI should know its heroes!</h4>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </div>;
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

                                    <h5>Hall of Fame</h5>
                                    <p>
                                        {this.state.donates.map((donate) => (
                                            <img src={donate.image} alt="" key={donate.id} />
                                        ))}
                                    </p>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}