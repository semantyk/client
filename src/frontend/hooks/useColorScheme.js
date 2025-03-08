/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useColorScheme.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for the color scheme hook.
 *
 * @created: Jul 5, 2024
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Import
import { useEffect, useState } from "react";

//* Main
export default function useColorScheme() {
    // Hooks
    const [colorScheme, setColorScheme] = useState("light");
    const [textColorScheme, setTextColorScheme] = useState("dark");
    // Logic
    const handleChange = (event) => {
        setColorScheme(event.matches ? "light" : "dark");
        setTextColorScheme(event.matches ? "dark" : "light");
    };
    // - useEffect
    useEffect(() => {
        // Event
        const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
        // Listener
        mediaQuery.addEventListener("change", handleChange);
        // Set initial state
        handleChange(mediaQuery);
        // Cleanup
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);
    // Return
    return { colorScheme, textColorScheme };
};