/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `ArchivePage.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import {Col, Image, Row} from 'react-bootstrap';
import React, {Component} from 'react';

//* Internal Imports
import Footer from '../basic/Footer';
import Header from '../basic/Header';
import Head from '../heads/Head';

//* Main
export default class ArchivePage extends Component {
    render() {
        const title = 'Archive';
        const description = 'Knlowledge Database & File System';
        const url = 'https://www.semantyk.com/archive/';
        return (
            <div id={title}>
                <Head description={description} title={title} url={url}/>
                <Header>
                    <Row className="align-items-center">
                        <Col>
                            {<h1>{title}</h1>}
                            {<p>{description}</p>}
                        </Col>
                    </Row>
                </Header>
                <Row className="m-0 px-5 pt-3">
                    <a href="https://lod-cloud.net/clouds/lod-cloud.svg">
                        <Image alt="Linked Open Data Cloud"
                               width="100%"
                               src="https://lod-cloud.net/clouds/lod-cloud.svg"/>
                    </a>
                </Row>
                <Footer/>
            </div>
        );
    }
}