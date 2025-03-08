/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useLang.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @created: Jul 9, 2024
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useEffect, useState } from "react";
import { getLang } from "@semantyk/frontend/logic/services/getLang";

//* Main
export default function useLang() {
    // Hooks
    const [lang, setLang] = useState(getLang);
    // - useEffect
    useEffect(() => {
        setLang(navigator.language);
    }, []);
    // Return
    return lang;
}