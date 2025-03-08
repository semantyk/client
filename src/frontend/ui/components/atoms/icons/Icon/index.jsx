/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Icon.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the Icon component.
 *
 * @created: Jul 9, 2024
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
import Image from "next/image";
//* Local Imports
import useColorScheme from "@semantyk/frontend/hooks/useColorScheme";

//* Main
export default function Icon(props) {
    // Hooks
    const { colorScheme } = useColorScheme();
    // Logic
    const suffix = colorScheme === "dark" ? "-dark" : "";
    // Return
    return colorScheme && (
        <Image
            alt="Semantyk"
            priority
            src={`/favicon${suffix}.svg`}
            title="Semantyk"
            {...props}
        />
    );
}