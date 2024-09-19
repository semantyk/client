/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Canvas.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for the canvas component.
 *
 * @created: Jul 17, 2024
 * @modified: Sep 18,2024
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
//* Local Imports
import CanvasLayout from "@semantyk/frontend/ui/models/atoms/Canvas/layout";

//* Main
export default function Canvas({ children }) {
    // Logic
    const camera = { position: [0, 0, 100] };
    // Return
    return (
        <CanvasLayout camera={camera}>
            {children}
        </CanvasLayout>
    );
};