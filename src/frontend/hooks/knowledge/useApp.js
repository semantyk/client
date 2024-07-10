/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useApp.js`
 * client | Semantyk
 *
 * This file contains the `useApp` hook.
 *
 * Created: Jul 8, 2023
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
import { getApp } from "@semantyk/backend/api/knowledge/services/getApp";

//* Main
export default function useApp() {
    // Hooks
    const [app, setApp] = useState({});
    // - useEffect
    useEffect(() => {
        getApp().then(setApp);
    }, []);
    // Return
    return app;
}