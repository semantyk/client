/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Body.jsx`
 * client | Semantyk
 *
 * Created: Jul 7, 2024
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
//* Local Imports
import useColorScheme from "@semantyk/frontend/hooks/useColorScheme";
import Session from "@semantyk/frontend/ui/components/atoms/Session";
import "@semantyk/app/layout.css";


export default function Body({ children }) {
    // Hooks
    const { colorScheme, textColorScheme } = useColorScheme();
    // Return
    return (
        <body id="App" className={`bg-${colorScheme} text-${textColorScheme}`}>
        <Session>
            {children}
        </Session>
        </body>
    );
}