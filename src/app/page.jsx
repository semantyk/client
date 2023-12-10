/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `page.jsx` | `app`
 * client | Semantyk
 *
 * Created: Nov 30, 2023
 * Modified: Dec 10, 2023
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
import Footer from "@/frontend/ui/components/molecules/footer/component";


//* Main
export default function Page({ children }) {
    // Return
    return (
        <div id="Page">
            {children}
            <Footer/>
        </div>
    );
}