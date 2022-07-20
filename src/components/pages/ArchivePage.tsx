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
import {Image, Row} from 'react-bootstrap';
import React, {Component} from 'react';

//* Internal Imports
import Footer from '../basic/Footer';
import Header from '../basic/Header';
import {Head} from '../heads/Head';

//* Main
export class ArchivePage extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: 'Archive',
            description: 'Knowledge Database & File System'
        };
    }

    render() {
        const {description, title} = this.state;
        return (<>
            <Head description={description} title={title}/>
            <Header description={description} title={title}>
            </Header>
            <Row className="m-0 px-5 pt-3">
                <a href="https://lod-cloud.net/clouds/lod-cloud.svg">
                    <Image alt="Linked Open Data Cloud"
                           src="https://lod-cloud.net/clouds/lod-cloud.svg"
                           width="100%"/>
                </a>
            </Row>
            <Footer/>
        </>);
    }
}
