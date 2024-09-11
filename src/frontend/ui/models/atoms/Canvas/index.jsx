/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Canvas.jsx`
 * client | Semantyk
 *
 * This file contains the logic for the canvas component.
 *
 * Created: Jul 17, 2024
 * Modified: Jul 17, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
import CanvasLayout from "@semantyk/frontend/ui/models/atoms/Canvas/layout";

//* Main
export default function Canvas({ children }) {
    // Logic
    const camera = { position: [0, 0, 100] };
    // Return
    return (
        <CanvasLayout camera={camera}>
            <ambientLight intensity={1}/>
            {children}
        </CanvasLayout>
    );
};