/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `Header`
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

"use client";

//* Imports
import React from "react";
//* Local Imports
import HeaderLayout
    from "@/frontend/ui/components/organisms/Header/layout";
import usePage from "@/frontend/hooks/usePage";
import NavBar from "@/frontend/ui/components/molecules/NavBar";


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