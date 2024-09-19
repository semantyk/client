/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for a generic Three.js model component.
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

"use client";

//* Imports
import React from "react";
import Canvas from "@semantyk/frontend/ui/models/atoms/Canvas";
import ParticlesModel from "@semantyk/frontend/ui/models/molecule/Particles";

//* Main
export default function Model() {
    // Return
    return (
        <Canvas>
            <ParticlesModel/>
        </Canvas>
    );
};