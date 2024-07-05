/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `page.css.jsx`
 * client | Semantyk
 *
 * This file contains the Page component.
 *
 * Created: Nov 30, 2023
 * Modified: Jul 5, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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