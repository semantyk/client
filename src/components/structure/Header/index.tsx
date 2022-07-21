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
import {Col} from "react-bootstrap";
import NavBar from '../NavBar';

//* Main
class Header extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            description: this.props.description || '',
            title: this.props.title || '',
        };
    }

    render() {
        const {description, title} = this.state;
        const header = title || description ? (
            <Col className="pb-1">
                <h1>{title}</h1>
                <p>{description}</p>
            </Col>
        ) : null;
        return (
            <header className={'sticky-top px-5'}
                    style={{backdropFilter: 'blur(50px)'}}>
                <NavBar/>
                {header}
            </header>
        );
    }
}

//* Exports
export default Header;
