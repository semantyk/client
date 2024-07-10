/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useLang.js`
 * client | Semantyk
 *
 * Created: Jul 9, 2024
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