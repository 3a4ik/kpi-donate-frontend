import React from 'react';
import { Row, Container } from 'reactstrap';
import ProjectCard from './СardComponent'
import "css/cards.css"
import axios from 'axios';

class CardGrid extends React.Component {
    state = {
        projects: []
    };

    componentWillMount() {
        axios.get('https://kpi-donate.herokuapp.com/project')
            .then((res) => {
                if (res.data) {
                    this.setState(() => ({
                        projects: res.data
                    }));
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <section>
                <Container fluid className="text-center">
                    <h2 className='card-heading d-inline-flex my-5 py-4 px-5 text-uppercase text-center'>Projects</h2>
                    <Row className="text-left mx-md-3">
                        { this.state.projects.map((project) => (
                            <ProjectCard
                                pTitle={project.title}
                                pID={project.id}
                                pDescription={project.description}
                                pImg={project.image}
                                pMoney={project.currentAmount}
                                pNeeded={project.neededAmount}
                                key={project.id}
                                isOpen={project.open}
                            />
                        ))
                        }
                    </Row>
                </Container>
            </section>
        )
    }
}

export default CardGrid;