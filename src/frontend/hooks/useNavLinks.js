/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useNavLinks.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the `useNavLinks` hook.
 *
 * @created: Dec 22, 2023
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
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