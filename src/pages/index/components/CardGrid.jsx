import React from 'react';
import { Row, Container } from 'reactstrap';
import ProjectCard from './СardComponent'
import "css/cards.css"

import {projects} from "config/projects";


const CardGrid = () => {
    return (
        <section>
            <Container fluid className="text-center">
                <h2 className='card-heading d-inline-flex my-5 py-4 px-5 text-uppercase text-center'>Projects</h2>
                <Row className="text-left mx-md-3">
                   { projects.map((project, id) => (
                           <ProjectCard
                               pTitle={project.title}
                               pID={project.projectID}
                               pSlug={project.slug}
                               pDescription={project.description}
                               pImg={project.img}
                               pMoney={project.money}
                               pNeeded={project.needed}
                               key={id}
                           />
                       ))
                   }
                </Row>
            </Container>
        </section>
    )
}
export default CardGrid;