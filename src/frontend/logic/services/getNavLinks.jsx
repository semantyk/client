/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getNavLinks.js`
 * client | Semantyk
 *
 * Created: Dec 23, 2023
 * Modified: Dec 23, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
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