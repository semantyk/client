/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `Header`
 * client | Semantyk
 *
 * This file contains the logic for the header.
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

"use client";

//* Imports
import React from "react";
//* Local Imports
import HeaderLayout
    from "@semantyk/frontend/ui/components/organisms/Header/layout";
import usePage from "@semantyk/frontend/hooks/usePage";
import NavBar from "@semantyk/frontend/ui/components/molecules/NavBar";


export default function Header({ children, params }) {
    // Props
    const slug = params && params.slug;
    // Hooks
    const page = usePage(slug);
    // Return
    return (
        <HeaderLayout>
            <NavBar/>
            {page && <h1>{page.title}</h1>}
            {page && <p className={"text-secondary"}>{page.subtitle}</p>}
            {children}
        </HeaderLayout>
    );
}