/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useColorScheme.js`
 * client | Semantyk
 *
 * This file contains the logic for the color scheme hook.
 *
 * Created: Jul 05, 2024
 * Modified: Jul 05, 2024
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useEffect, useState } from "react";

export default function useColorScheme() {
    const [colorScheme, setColorScheme] = useState("light");
    const [textColorScheme, setTextColorScheme] = useState("dark");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
        setColorScheme(mediaQuery.matches ? "light" : "dark");
        setTextColorScheme(mediaQuery.matches ? "dark" : "light");

        const handleChange = (event) => {
            setColorScheme(event.matches ? "light" : "dark");
            setTextColorScheme(mediaQuery.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return { colorScheme, textColorScheme };
};