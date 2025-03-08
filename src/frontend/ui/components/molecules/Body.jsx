/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Body.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @created: Jul 7, 2024
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