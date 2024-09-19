/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useKnowledge.js` | `api`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the `useKnowledge` hook.
 *
 * @created: Dec 5, 2023
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
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