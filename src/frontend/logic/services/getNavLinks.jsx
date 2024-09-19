/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getNavLinks.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains a method for generating `NavLink` components from a
 *  set of pages for a given path.
 *
 * @created: Dec 23, 2023
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
//* Local Imports
import { NavLink } from "@semantyk/frontend/ui/components/atoms/NavLink";
import {
    getKnowledge
} from "@semantyk/backend/api/knowledge/services/getKnowledge";
import { shape } from "@semantyk/backend/logic/kgm/shapes";
import {
    APP_NAVBARS_DOC,
    APP_PAGES_DOC
} from "@semantyk/backend/logic/kgm/nodes";

//* Main
export async function getNavLinks(navBar, pages, lang) {
    // Logic
    const document = APP_NAVBARS_DOC;
    const { navBarPages } = await getKnowledge(document, navBar, shape.navBar, lang);
    // Return
    return navBarPages.map(async (navBarPage, key) => {
        const { pathname } = new URL(navBarPage, APP_PAGES_DOC);
        const path = pathname.substring(pathname.lastIndexOf("/"));
        const page = pages[path] || {};
        return <NavLink key={key} page={page}/>;
    });
}