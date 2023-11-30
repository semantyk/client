/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.js` | `app`
 * README.md | Semantyk
 *
 * Created: Nov 30, 2023
 * Modified: Nov 30, 2023
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
import metadata from "./metadata.js";

//* Main
export async function generateMetadata() {
    // Return
    return metadata;
}

export default function RootLayout({ children }) {
    // Return
    return (
        <html lang="en">
        <body className={`bg-dark`}>
        {children}
        </body>
        </html>
    );
}