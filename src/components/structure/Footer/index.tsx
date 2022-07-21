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
import {Component} from 'react';

//* Internal Imports
import {project} from "../../../project";

//* Main
class Footer extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {title: project.name};
    }

    render() {
        const {title} = this.state;
        return (
            <footer id="Footer" className={'sticky-top px-5 py-3'}>
                <small>
                    <p className="mb-0 text-center text-muted">
                        Copyright © <Link className="text-muted"
                                          to="/">{title}</Link> {new Date().getFullYear()}
                    </p>
                </small>
            </footer>
        );
    }
}

//* Exports
export default Footer;
