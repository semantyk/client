/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useColorScheme.js`
 * client | Semantyk
 *
 * This file contains the logic for the color scheme hook.
 *
 * Created: Jul 5, 2024
 * Modified: Jul 10, 2024
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
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