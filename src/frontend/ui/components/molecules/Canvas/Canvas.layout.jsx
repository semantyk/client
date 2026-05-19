/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Canvas.layout.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Layout wrapper for the Canvas molecule with React Three Fiber.
 *
 * @created: Jul 17, 2024
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
import { Canvas } from "@react-three/fiber";
//* Local Imports
import "@semantyk/frontend/ui/components/molecules/Canvas/Canvas.styles.css";

//* Main
export default function CanvasLayout(props) {
    // Props
    const { children, ...rest } = props;
    // Return
    return (
        <div id="Canvas">
            <Canvas {...rest}>
                {children}
            </Canvas>
        </div>
    );
}