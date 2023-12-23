/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `NavBar`
 * client | Semantyk
 *
 * Created: Dec 23, 2023
 * Modified: Dec 23, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";
//* Local Imports
import useNavLinks from "@semantyk/frontend/hooks/useNavLinks";
import Icon from "@semantyk/frontend/ui/components/atoms/icons/Icon";

//* Main
export default function NavBar() {
    // Hooks
    const navLinks = useNavLinks();
    // Return
    return (
        <Navbar expand="sm" variant="dark">
            <Navbar.Brand as={Link} href={"/"}>
                <Icon size={40} title={"Semantyk"}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className="justify-content-between">
                <Nav className="mr-auto">
                    {navLinks}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}