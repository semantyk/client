/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `not-found.jsx`
 * client | Semantyk
 *
 * Created: Dec 06, 2023
 * Modified: Dec 22, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import Page from "@/app/page";

//* Main
export default function NotFound() {
    return (
        <Page>
            <h2>404 - Not Found</h2>
            <p className="text-secondary">Could not find requested resource</p>
        </Page>
    );
}