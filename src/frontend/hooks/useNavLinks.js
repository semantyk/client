/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useNavLinkProps.jsx`
 * client | Semantyk
 *
 * Created: Dec 22, 2023
 * Modified: Dec 22, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
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