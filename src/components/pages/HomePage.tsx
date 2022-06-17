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
            <Footer/>
        </div>);
    }
}