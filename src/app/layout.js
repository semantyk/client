/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.js` | `app`
 * README.md | Semantyk
 *
 * Created: Nov 30, 2023
 * Modified: Dec 3, 2023
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
import getMetadata from "../logic/metadata/service.js";

//* Main
export function generateMetadata() { return getMetadata(); }

export default function RootLayout({ children }) {
    // Return
    return (
        <html lang="en">
        <body className={`bg-dark text-light`}>
        {children}
        </body>
        </html>
    );
}