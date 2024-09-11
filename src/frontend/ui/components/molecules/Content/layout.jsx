/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx`
 * client | Semantyk
 *
 * Created: Jul 17, 2024
 * Modified: Jul 17, 2024
 *
 * Author: Semantyk Team
 * Maintainer:
 *
 * Copyright © Semantyk 2024. All rights reserved.
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