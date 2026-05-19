/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `layout.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @created: Jul 17, 2024
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * Maintainer:
 *
 * @copyright: Semantyk © 2025. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React from "react";
import { Canvas } from "@react-three/fiber";
//* Local Imports
import "@semantyk/frontend/ui/models/atoms/Canvas/index.css";

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