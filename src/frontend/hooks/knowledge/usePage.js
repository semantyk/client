/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `usePage.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the `usePageKnowledge` hook.
 *
 * @created: Dec 23, 2023
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
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