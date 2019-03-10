import React from 'react';

import {Container, Row, Col} from 'reactstrap';

import HeaderImg from 'img/kpi.jpg'
import '../../../css/header.css'

export default class Header extends React.Component {


    render() {
        return (
            <header className="d-flex justify-content-center align-items-center kpiHeader" style={styles.header}>
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={11} md={10} lg={9} xl={8} className="">
                            <div className="p-1 headerText my-5 text-white">
                                <h1 className="display-3 pt-3">KPI</h1>
                                <h1 className="display-3">Donate</h1>
                                <h4 className="py-3">Lorem impsum</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}

// export default Header

const styles = {
    header: {
        background: 'linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(' + HeaderImg + ')',
        backgroundAttachment: 'fixed',
        backgroundPositionX: 'center',
        backgroundPositionY: 'bottom',
        backgroundRepeat: 'no-repeat',
        height: '70vh'

    }
}
