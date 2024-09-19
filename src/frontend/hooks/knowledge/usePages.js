/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `usePages.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the `usePages` hook.
 *
 * @created: July 8, 2023
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
import { getPages } from "@semantyk/backend/api/knowledge/services/getPages";
import useLang from "@semantyk/frontend/hooks/useLang";

//* Main
export default function usePages() {
    // Hooks
    const [pages, setPages] = useState({});
    // Logic
    const lang = useLang();
    // - useEffect
    useEffect(() => {
        getPages(lang).then(pages => setPages(pages));
    }, [lang]);
    // Return
    return pages;
}