/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `IconButton`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
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
import Link from "next/link";
import Icon from "@/frontend/ui/components/atoms/images/Icon";

//* Main
export default function IconButton({ href, ...props }) {
    // Return
    return (
        <Link href={href}>
            <Icon {...props}/>
        </Link>
    );
}