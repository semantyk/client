/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx`
 * client | Semantyk
 *
 * This file contains the logic for the footer.
 *
 * Created: Dec 5, 2023
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
import Link from "next/link";
//* Local Imports
import useKnowledge from "@semantyk/frontend/hooks/knowledge/useKnowledge";
import FooterLayout
    from "@semantyk/frontend/ui/components/molecules/Footer/layout";


export default function Footer() {
    // Hooks
    // - useState
    const { app } = useKnowledge();
    const { name, copyrightYear } = app;
    // Return
    const link = <Link className="text-secondary" href="/">{name}</Link>;
    return (
        <FooterLayout>
            <small className="text-secondary">
                Copyright © {link} {copyrightYear}
            </small>
        </FooterLayout>
    );
}