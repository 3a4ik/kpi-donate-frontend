import React from 'react';

import {Container, Row, Col} from 'reactstrap';

import HeaderImg from 'img/kpi.jpg'
import './Header.css'

const Header = () => {
    return (
        <header className="d-flex kpiHeader">
            <Container fluid>
                <Row>
                    <Col xs={6} className="align-self-center">
                        <div className="p-4 headerText">
                            <h1 className="display-2">KPI</h1>
                            <h1 className="display-2">Donate</h1>
                            <p className="lead">Lorem impsum</p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <img src={HeaderImg} className="headerImg img-fluid rounded-0"/>
                    </Col>
                </Row>
            </Container>
        </header>
)}

export default Header