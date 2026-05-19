/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Head.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Atom component rendering document head metadata.
 *
 * @created: Jul 9, 2024
 * @modified: May 19, 2026
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2026. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
import Analytics from "@semantyk/frontend/logic/analytics/Analytics";
//* Local Imports

//* Main
export default function Head() {
    // Return
    return <Analytics />;
}