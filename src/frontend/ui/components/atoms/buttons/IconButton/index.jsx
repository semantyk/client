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
import Image from "next/image";
import icon from "@semantyk/app/icon.png";

//* Main
export default function IconButton(props) {
    // Props
    const { href, ...rest } = props;
    // Return
    return (
        <Link href={href}>
            <Image src={icon} alt="Semantyk" title="Semantyk" {...rest}/>
        </Link>
    );
}