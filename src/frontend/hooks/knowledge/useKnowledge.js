/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useKnowledge.js` | `api`
 * client | Semantyk
 *
 * This file contains the `useKnowledge` hook.
 *
 * Created: Dec 5, 2023
 * Modified: Jul 10, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
//* Local Imports
import useApp from "@semantyk/frontend/hooks/knowledge/useApp";
import usePages from "@semantyk/frontend/hooks/knowledge/usePages";


//* Main
export default function useKnowledge() {
    // Hooks
    const app = useApp();
    const pages = usePages();
    // Return
    return { app, pages };
}