/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Body.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Molecule component wrapping the main document body content.
 *
 * @created: Jul 7, 2024
 * @modified: May 19, 2026
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2026. All rights reserved.
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