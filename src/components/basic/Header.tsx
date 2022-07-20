/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `Header.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import React, {Component} from 'react';

//* Internal Imports
import NavBar from './NavBar';
import {Col} from "react-bootstrap";

//* Main
export default class Header extends Component<any> {
    render() {
        const {title, description} = this.props || '';
        const line = this.props.line ? 'border-bottom' : '';
        return (
            <header className={`sticky-top px-5 ${line}`}
                    style={{backdropFilter: 'blur(50px)'}}>
                <NavBar/>
                {title || description ? <Col className="pb-1">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Col> : null}
                {this.props.children}
            </header>
        );
    }
}
