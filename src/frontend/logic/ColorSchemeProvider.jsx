/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `ColorSchemeProvider.jsx` | `logic`
 * client | Semantyk
 *
 * This file contains the `ColorSchemeProvider` component.
 *
 * Created: Dec 4, 2023
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
import useColorScheme from "@semantyk/frontend/hooks/useColorScheme";

export default function ColorSchemeProvider({ children }) {
    // Hooks
    const { colorScheme, textColorScheme } = useColorScheme();
    // Return
    return (
        <body id="App" className={`bg-${colorScheme} text-${textColorScheme}`}>
        {children}
        </body>
    );
}