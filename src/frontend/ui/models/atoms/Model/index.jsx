/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `index.jsx`
 * client | Semantyk
 *
 * This file contains the logic for a generic Three.js model component.
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