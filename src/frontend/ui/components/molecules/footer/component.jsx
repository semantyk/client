/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `component.jsx`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
 * Modified: Dec 10, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

"use client";

//* Imports
import Link from "next/link";
//* Local Imports
import useKnowledge from "@/frontend/hooks/useKnowledge";
import FooterLayout from "./layout";


export default function Footer() {
    // Hooks
    const { name, copyrightYear } = useKnowledge();
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