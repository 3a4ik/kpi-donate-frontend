import React from 'react';
import { Link } from 'react-router-dom'

import { Row, Col, Container, Card, Button, CardImg, CardTitle, CardText, CardFooter, CardBody, Progress } from 'reactstrap';


import {projects} from "config/projects";


class CardGrid extends React.Component {
    render() {

        let projectCards = projects.map((project, id) => {
            return(
                <ProjectCard
                    pTitle={project.title}
                    pSlug={project.slug}
                    pDescription={project.description}
                    pImg={project.img}
                    pMoney={project.money}
                    pNeeded={project.needed}
                    key={id}
                />
            )
        });
        return (
            <section>
                <Container>
                    <h3 className='m-4 p-4 text-uppercase text-center'>Projects</h3>
                    <Row className="mb-4">
                       {projectCards}
                    </Row>
                </Container>



            </section>
        );
    }
}

const ProjectCard = (props) => {
    return (
        <Col xs={12} sm={6} lg={4} xl={3} className="mb-4">
            <Card className="h-100">
                <CardImg top src={props.pImg} alt={props.pTitle} />
                <Progress className="m-4" color="secondary" value={props.pMoney} max={props.pNeeded} />
                <CardBody>
                    <CardTitle tag="h4">{props.pTitle}</CardTitle>
                    <CardText>{props.pDescription}</CardText>
                </CardBody>
                <CardFooter>
                    <Button className="mx-auto" tag={Link} to={props.pSlug}>Donate</Button>
                </CardFooter>
            </Card>
        </Col>
    );
};

export default CardGrid;