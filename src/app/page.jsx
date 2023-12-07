/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `page.jsx` | `data`
 * client | Semantyk
 *
 * Created: Nov 30, 2023
 * Modified: Dic 6, 2023
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
import "./page.css";
import Footer from "../components/molecules/footer/component";
import AuthButton from "../components/atoms/authButton";


//* Main
export default function Page({ children }) {
    // Return
    return (
        <div id="Page">
            {children}
            <AuthButton/>
            <Footer/>
        </div>
    );
}