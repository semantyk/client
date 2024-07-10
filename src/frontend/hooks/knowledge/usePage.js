/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `usePage.js`
 * client | Semantyk
 *
 * This file contains the `usePageKnowledge` hook.
 *
 * Created: Dec 23, 2023
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
import usePages from "@semantyk/frontend/hooks/knowledge/usePages";
import { usePathname } from "next/navigation";

//* Main

export default function usePage() {
    // Hooks
    // - useState
    const [page, setPage] = useState({});
    // - usePages
    const pages = usePages();
    // - usePathname
    const pathname = usePathname();
    // - useEffect
    useEffect(() => {
        const currentPage = pages[pathname];
        const notFoundPage = pages["/404"];
        const page = currentPage || notFoundPage;
        if (!page) return;
        setPage(page);
    }, [pages, pathname]);
    // Return
    return page;
}