/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * View | `ArchivePage`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import React, {Component} from 'react';
import {Image, Row} from 'react-bootstrap';

//* Internal Imports
import Footer from '../../components/structure/Footer';
import Header from '../../components/structure/Header';
import SubPageHelmet from '../../components/structure/Helmet/SubPageHelmet';

//* Main
class ArchivePage extends Component<any, any> {
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
            <SubPageHelmet description={description} title={title}/>
            <Header description={description} title={title}/>
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

//* Exports
export default ArchivePage;
