/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `usePages.js`
 * client | Semantyk
 *
 * This file contains the `usePages` hook.
 *
 * Created: July 8, 2023
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