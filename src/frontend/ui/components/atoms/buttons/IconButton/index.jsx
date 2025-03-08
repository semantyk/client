/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx` | `IconButton`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for the icon button.
 *
 * @created: Dec 5, 2023
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
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