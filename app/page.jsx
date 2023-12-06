/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `page.jsx` | `data`
 * client | Semantyk
 *
 * Created: Nov 30, 2023
 * Modified: Dic 5, 2023
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
import Footer from "./_components/molecules/footer/component";
import StateManager from "./_logic/state/manager";


//* Main
export default function Page({ children }) {
    // Return
    return (
        <StateManager>
            <div id="Page">
                {children}
                <Footer/>
            </div>
        </StateManager>
    );
}