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

//* Main
export default class HomePage extends Component {
    render() {
        return (<div className="HomePage">
            <MainHead/>
            <Header/>
            <Container fluid>
                <Row>
                    <h1 className="text-center display-2 fw-bold">Semantyk</h1>
                    <h1 className="text-center display-5">Ideas Wonder</h1>
                    <Col/>
                    <Col className="text-center" md={6}>
                        <Image fluid src="Connected.png"/>
                    </Col>
                    <Col/>
                </Row>
                <h1 className="text-center display-4 pt-5">Próximamente...</h1>
            </Container>
            <Footer/>
        </div>);
    }
}