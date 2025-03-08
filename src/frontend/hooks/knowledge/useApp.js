/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useApp.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the `useApp` hook.
 *
 * @created: Jul 8, 2023
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