/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `page.css.jsx`
 * client | Semantyk
 *
 * Created: Nov 30, 2023
 * Modified: Dec 22, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
//* Local Imports
import "@semantyk/app/page.css";
import Header from "@semantyk/frontend/ui/components/organisms/Header";


//* Main
export default function Page(props) {
    const { children, ...rest } = props;
    // Return
    return (
        <div id="Page">
            <Header {...rest}/>
            {children}
        </div>
    );
}