/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for the footer.
 *
 * @created: Dec 5, 2023
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
                @copyright: Copyright © {link} {copyrightYear}
            </small>
        </FooterLayout>
    );
}