/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `NavBar.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import {Image, Nav, Navbar} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import React, {Component} from 'react';
import {project} from "../../project";

//* Main
export default class NavBar extends Component {
    render() {
        return (
            <Navbar id="NavBar" className="px-0" expand="sm">
                <Navbar.Brand as={Link} to="/">
                    <Image alt={`${project.name} Navbar Logo`} roundedCircle
                           src={project.images.favicon} width="40"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/archive">Archive</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}