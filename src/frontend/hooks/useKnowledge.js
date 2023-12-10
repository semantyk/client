/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useKnowledge.js` | `api`
 * client | Semantyk
 *
 * Created: Dec 05, 2023
 * Modified: Dec 10, 2023
 *
 * Author(s): Semantyk Team
 * Maintainer(s): Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2023. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useEffect, useState } from "react";
import { useSession } from "@inrupt/solid-ui-react";
//* Local Imports
import { getKnowledge } from "@/backend/api/knowledge/getKnowledge";


//* Main
export default function useKnowledge() {
    // Hooks
    const { fetch } = useSession();
    // - useState
    const [knowledge, setKnowledge] = useState({});
    // - useEffect
    useEffect(() => {
        getKnowledge(fetch).then(setKnowledge);
    }, [fetch]);
    // Return
    return knowledge;
}