/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `Header`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for the header.
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

"use client";

//* Imports
import React from "react";
//* Local Imports
import HeaderLayout
    from "@semantyk/frontend/ui/components/molecules/Header/layout";
import HeaderTitle
    from "@semantyk/frontend/ui/components/atoms/text/HeaderTitle";
import HeaderSubtitle
    from "@semantyk/frontend/ui/components/atoms/text/HeaderSubtitle";
import NavBar from "@semantyk/frontend/ui/components/molecules/NavBar";

// Main
export default function Header() {
    // Return
    return (
        <HeaderLayout>
            <NavBar/>
            <HeaderTitle/>
            <HeaderSubtitle/>
        </HeaderLayout>
    );
}