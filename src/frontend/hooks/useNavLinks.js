/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useNavLinks.js`
 * client | Semantyk
 *
 * This file contains the `useNavLinks` hook.
 *
 * Created: Dec 22, 2023
 * Modified: Jul 5, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getNavLinks } from "@semantyk/frontend/logic/services/getNavLinks";
//* Local Imports

//* Main
export default function useNavLinks() {
    // Hooks
    const [navLinks, setNavLinks] = useState([]);
    // - pathname
    const pathname = usePathname();
    // - useEffect
    useEffect(() => {
        getNavLinks(pathname).then(setNavLinks);
    }, [pathname]);
    // Return
    return navLinks;
}