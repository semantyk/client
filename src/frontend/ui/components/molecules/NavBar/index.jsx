/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `NavBar`
 * client | Semantyk
 *
 * This file contains the logic for the navigation bar.
 *
 * Created: Dec 23, 2023
 * Modified: Jul 5, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
//* Local Imports
import useNavLinks from "@semantyk/frontend/hooks/useNavLinks";
import icon from "@semantyk/app/icon.png";

//* Main
export default function NavBar() {
    // Hooks
    const navLinks = useNavLinks();
    // Return
    return (
        <Navbar expand="sm" variant="dark">
            <Navbar.Brand as={Link} href={"/"}>
                <Image src={icon} alt="Semantyk" title="Semantyk" height="40"
                       width="40"/>
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