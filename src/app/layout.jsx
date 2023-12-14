/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx` | `app`
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
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
//* Local Imports
import { getMetadata } from "@/backend/logic/seo";
import StateManager from "@/frontend/logic/state";


//* Main
export async function generateMetadata() {return await getMetadata();}

export default function RootLayout({ children }) {
    // Return
    return (
        <html lang="en">
        <body className={`bg-dark text-light`}>
        <StateManager>
            {children}
        </StateManager>
        </body>
        </html>
    );
}