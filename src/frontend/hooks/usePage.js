/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `usePage.js`
 * client | Semantyk
 *
 * Created: Dec 23, 2023
 * Modified: Apr 27, 2024
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useEffect, useState } from "react";
//* Local Imports
import { getPage } from "@semantyk/frontend/logic/services/getPage";

//* Main
export default function usePage(slug) {
    // Hooks
    // - useState
    const [page, setPage] = useState({});
    // - useEffect
    useEffect(() => {
        getPage(slug).then(setPage);
    }, [slug]);
    // Return
    return page;
}