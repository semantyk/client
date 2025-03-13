/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for a generic Three.js model component.
 *
 * @created: Jul 17, 2024
 * @modified: Mar 12, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

"use client";

//* Imports
import React from "react";
import Canvas from "@semantyk/frontend/ui/components/molecules/Canvas";
import GraphModel from "@semantyk/frontend/ui/models/Graph";
import { usePathname } from "next/navigation";
import ParticlesModel from "@semantyk/frontend/ui/models/Particles";

//* Main
export default function Model() {
    // Logic
    const pathname = usePathname();
    // Return
    return (
        <Canvas>
            {pathname === "/" && <ParticlesModel />}
            {pathname === "/knowledge" && <GraphModel />}
        </Canvas>
    );
};