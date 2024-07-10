/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx`
 * client | Semantyk
 *
 * Created: Jul 9, 2024
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
//* Local Imports
import usePage from "@semantyk/frontend/hooks/knowledge/usePage";

//* Main
export default function HeaderTitle() {
    // Hooks
    const { name } = usePage();
    // Return
    return name && <h1>{name}</h1>;
}