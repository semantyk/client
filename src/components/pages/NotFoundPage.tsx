/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `NotFoundPage.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import React, {Component} from 'react';

//* Internal Imports
import Footer from '../basic/Footer';
import {Head} from '../heads/Head';
import Header from '../basic/Header';

//* Main
export class NotFoundPage extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '404 Not Found',
            description: 'Not Found'
        };
    }

    render() {
        const {description, title} = this.state;
        return (
            <div id={title}>
                <Head description={description} title={title}/>
                <Header/>
                <h1 className="my-3 text-center">{title}</h1>
                <Footer/>
            </div>
        );
    }
}
