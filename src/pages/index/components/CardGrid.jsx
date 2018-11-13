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
            {/* WARNING TODO: remove */}
            <form action="https://kpi-donate.herokuapp.com/maecenas/confirm" method="POST">
                <script
                    src="https://checkout.stripe.com/checkout.js" className="stripe-button"
                    data-key="pk_test_3gkka9ySkvjgw9ctuNbalkOw"
                    data-amount="999"
                    data-name="kpi-donate"
                    data-description="Example charge"
                    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                    data-locale="auto">
                </script>
            </form>
        </section>
    )
}
export default CardGrid;

// const ProjectCard = (props) => {
//     return (
//         <Col xs={12} sm={6} lg={4} xl={3} className="mb-5">
//             <Card className="h-100">
//                 <CardImg top src={props.pImg} alt={props.pTitle} />
//                 <Progress className="mt-4 mx-0 rounded-0" color="secondary" value={props.pMoney} max={props.pNeeded} />
//                 <p className="text-muted mx-0 mb-0">Raised funds: {props.pMoney} / {props.pNeeded + ' \u20B4'}</p>
//                 <CardBody className="body px-0">
//                     <CardTitle tag="h4">{props.pTitle}</CardTitle>
//                     <CardText className="text-justify">{props.pDescription}</CardText>
//                 </CardBody>
//                 <CardFooter className="text-center">
//                     <DonateModal/>
//                 </CardFooter>
//             </Card>
//         </Col>
//     );
// };
