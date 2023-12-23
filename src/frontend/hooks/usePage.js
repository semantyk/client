/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `usePage.js`
 * client | Semantyk
 *
 * Created: Dec 23, 2023
 * Modified: Dec 23, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
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