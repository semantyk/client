/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # semantyk.com
 * Module | `index.jsx`
 *
 * June 13, 2022
 *
 * Copyright © Semantyk 2022. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Internal Imports
import PageHelmet from "../PageHelmet";

//* Main
class SubPageHelmet extends PageHelmet {
    constructor(props: any) {
        super(props);
        this.state = {
            description: `Ideas Wonder | ${this.props.description}.`,
            title: `${this.props.title} | Semantyk`
        };
    }
}

//* Exports
export default SubPageHelmet;
