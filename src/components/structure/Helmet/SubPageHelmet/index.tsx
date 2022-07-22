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
import project from "../../../../util/project";
import seo from "../../../../util/seo";

//* Main
class SubPageHelmet extends PageHelmet {
    constructor(props: any) {
        super(props);
        this.state = {
            description: `${project.slogan} | ${this.props.description}.`,
            title: `${this.props.title} | ${seo.title}`
        };
    }
}

//* Exports
export default SubPageHelmet;
