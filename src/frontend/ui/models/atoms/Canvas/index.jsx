/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Canvas.jsx`
 * client | Semantyk
 *
 * This file contains the logic for the canvas component.
 *
 * Created: Jul 17, 2024
 * Modified: Sep 12, 2024
 *
 * Author: Semantyk Team
 * Maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import React, { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
//* Local Imports
import CanvasLayout from "@semantyk/frontend/ui/models/atoms/Canvas/layout";

//* Main
export default function Canvas({ children }) {
    // Logic
    const camera = {
        fov: 75, // Field of view
        aspect: window.innerWidth / window.innerHeight, // Aspect ratio based on window dimensions
        near: 0.1, // Near clipping plane
        far: 1000, // Far clipping plane
        position: [0, 0, 100], // Camera position in the 3D space
    };
    // useEffect
    useEffect(() => {
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    // Return
    return (
        <CanvasLayout camera={camera}>
            <OrbitControls/>
            <ambientLight intensity={1}/>
            {children}
        </CanvasLayout>
    );
};