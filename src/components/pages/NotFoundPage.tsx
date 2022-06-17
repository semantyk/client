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
import Head from '../heads/Head';
import Header from '../basic/Header';

//* Main
export default class NotFoundPage extends Component {
    render() {
        const title = '404 Not Found';
        const description = 'Not Found';
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