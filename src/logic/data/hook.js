/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `hook.js` | `data`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
 * Modified: Dec 05, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s):
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useEffect, useState } from "react";
import { useSession } from "@inrupt/solid-ui-react";
//* Local Imports
import { getData } from "@/logic/data/service";



//* Main
export default function useData() {
    // Hooks
    const { fetch } = useSession();
    // - useState
    const [data, setData] = useState({});
    // - useEffect
    useEffect(() => {
        getData(fetch).then(setData);
    }, [fetch]);
    // Return
    return data;
}