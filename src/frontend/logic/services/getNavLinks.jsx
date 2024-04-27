/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getNavLinks.js`
 * client | Semantyk
 *
 * Created: Dec 23, 2023
 * Modified: Apr 27, 2024
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
//* Local Imports
import { getPages } from "@semantyk/frontend/logic/services/getPages";
import { NavLink } from "@semantyk/frontend/ui/components/atoms/NavLink";

//* Main
export async function getNavLinks(pathname) {
    // Logic
    const pages = await getPages();
    const values = Object.values(pages);
    // Return
    return values.map((page, key) => (
        <NavLink key={key} page={page} pathname={pathname}/>
    ));
}