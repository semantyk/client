/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Icon.jsx`
 * client | Semantyk
 *
 * This file contains the Icon component.
 *
 * Created: Jul 9, 2024
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
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