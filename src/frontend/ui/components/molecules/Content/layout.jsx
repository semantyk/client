/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @created: Jul 17, 2024
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * Maintainer:
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";

//* Main
export default function ContentLayout({ children }) {
    // Return
    return (
        <main id="Content">
            {children}
        </main>
    );
};