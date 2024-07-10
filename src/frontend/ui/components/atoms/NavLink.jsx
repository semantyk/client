/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getNavLinks.js`
 * client | Semantyk
 *
 * This file contains the logic for navigation links.
 *
 * Created: Dec 22, 2023
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
import { Nav } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Link from "next/link";

//* Main
export function NavLink(props, key) {
    // Props
    const { page } = props;
    // Hooks
    const pathname = usePathname();
    // Logic
    const { path, name } = page;
    const active = pathname === path;
    // Return
    return path && (
        <Nav.Link active={active} as={Link} href={path} key={key}>
            {name}
        </Nav.Link>
    );
}