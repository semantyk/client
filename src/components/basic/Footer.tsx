/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `Footer.tsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* External Imports
import {Link} from 'react-router-dom';
import {Component, ReactNode} from 'react';

//* Internal Imports
import {project} from "../../project";

//* Main
export default class Footer extends Component<{ children?: ReactNode, noLine?: string }, {}> {
    render() {
        const line = this.props.noLine !== undefined ? 'border-bottom' : '';
        return (
            <footer id="Footer" className={'sticky-top px-5 py-3 ' + line}>
                <small>
                    <p className="mb-0 text-center text-muted">
                        Copyright © <Link className="text-muted"
                                          to="/">{project.name}</Link> {new Date().getFullYear()}
                    </p>
                </small>
            </footer>
        );
    }
}