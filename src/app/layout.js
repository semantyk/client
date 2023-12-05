/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.js` | `data`
 * README.md | Semantyk
 *
 * Created: Nov 30, 2023
 * Modified: Dec 5, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import "bootstrap/dist/css/bootstrap.min.css";
//* Local Imports
import { getMetadata } from "../logic/metadata/service";
import StateManager from "../logic/state/manager";


export async function generateMetadata() {return await getMetadata();}

//* Main
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