import React from 'react';
import { Link } from 'react-router-dom'
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
     } from 'reactstrap'

import { INDEX } from 'config/routes'

export default class AppBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar light expand="md" className="p-2">
                <Container>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className="order-2 order-md-1">
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to={ INDEX }>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={ INDEX }>Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={ INDEX }>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={ INDEX }>Contacts</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}