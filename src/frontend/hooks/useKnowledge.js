/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useKnowledge.js` | `api`
 * client | Semantyk
 *
 * This file contains the `useKnowledge` hook.
 *
 * Created: Dec 5, 2023
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
import { useSession } from "@inrupt/solid-ui-react";
//* Local Imports
import {
    getKnowledge
} from "@semantyk/backend/api/knowledge/services/getKnowledge";


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