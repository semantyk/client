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
import React, {ReactNode} from 'react';

//* Internal Imports
import NavBar from './NavBar';

//* Main
export default class Header extends React.Component<{ children?: ReactNode, noLine?: string }, {}> {
    render() {
        const line = this.props.noLine !== undefined ? 'border-bottom' : '';
        return (
            <header id="Header" className={'sticky-top px-5 ' + line} style={{
                backdropFilter: 'blur(25px)',
                backgroundColor: 'rgba(251, 251, 251, 0.5)'
            }}>
                <NavBar/>
                {this.props.children}
            </header>
        );
    }
}