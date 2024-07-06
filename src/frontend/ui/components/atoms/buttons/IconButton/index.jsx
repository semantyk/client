/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `IconButton`
 * client | Semantyk
 *
 * This file contains the logic for the icon button.
 *
 * Created: Dec 5, 2023
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
import Link from "next/link";
//* Local Imports
import Icon from "@semantyk/frontend/ui/components/atoms/icons/Icon";


//* Main
export default function IconButton(props) {
    // Props
    const { href, ...rest } = props;
    // Return
    return (
        <Link href={href}>
            <Icon {...rest}/>
        </Link>
    );
}