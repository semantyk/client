/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `HomePage.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import {Component} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";


//* Internal Imports
import Header from '../basic/Header';
import Footer from '../basic/Footer';
import MainHead from '../heads/MainHead';
import {project} from "../../project";

//* Main
export default class HomePage extends Component {
    render() {
        return (<>
            <MainHead/>
            <Header/>
            <Container fluid>
                <Row>
                    <h1 className="text-center display-2 fw-bold">{project.name}</h1>
                    <h1 className="text-center display-6">{project.slogan}</h1>
                    <Col/>
                    <Col className="text-center" md={6}>
                        <Image fluid src={project.images.connected}/>
                    </Col>
                    <Col/>
                </Row>
                <h1 className="text-center display-4 pt-5">Jul 11, 2022</h1>
            </Container>
            <Footer/>
        </>);
    }
}