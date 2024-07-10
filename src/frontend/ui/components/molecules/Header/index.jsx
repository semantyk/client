/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `Header`
 * client | Semantyk
 *
 * This file contains the logic for the header.
 *
 * Created: Dec 23, 2023
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
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