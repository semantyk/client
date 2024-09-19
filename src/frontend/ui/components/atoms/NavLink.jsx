/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `getNavLinks.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for navigation links.
 *
 * @created: Dec 22, 2023
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