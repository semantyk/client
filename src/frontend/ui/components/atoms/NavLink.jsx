/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getNavLinks.js`
 * client | Semantyk
 *
 * Created: Dec 22, 2023
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
import { Nav } from "react-bootstrap";
import Link from "next/link";

//* Main
export function NavLink(props, key) {
    // Props
    const { pathname, page } = props;
    // Logic
    const { path, title } = page;
    const active = pathname === path;
    // Return
    return (
        <Nav.Link active={active} as={Link} href={path} key={key}>
            {title}
        </Nav.Link>
    );
}