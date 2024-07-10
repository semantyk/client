/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useNavLinks.js`
 * client | Semantyk
 *
 * This file contains the `useNavLinks` hook.
 *
 * Created: Dec 22, 2023
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useEffect, useState } from "react";
//* Local Imports
import { getNavLinks } from "@semantyk/frontend/logic/services/getNavLinks";
import usePages from "@semantyk/frontend/hooks/knowledge/usePages";
import usePage from "@semantyk/frontend/hooks/knowledge/usePage";

//* Main
export default function useNavLinks() {
    // Hooks
    const [navLinks, setNavLinks] = useState([]);
    // Logic
    const { navBar } = usePage();
    const pages = usePages();
    // - useEffect
    useEffect(() => {
        if (!navBar || !pages) return;
        const links = getNavLinks(navBar, pages);
        setNavLinks(links);
    }, [navBar, pages]);
    // Return
    return navLinks;
}