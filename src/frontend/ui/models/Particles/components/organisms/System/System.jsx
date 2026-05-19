/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `System.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Organism combining Particles with its system logic.
 *
 * @created: Mar 14, 2025
 * @modified: May 19, 2026
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2026. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Particles from "../../molecules/Particles/Particles.jsx";
import { ParticlesManager } from "../../../Particles.logic.js";
import ParticlesSystemLogic from "./System.logic.js";

//* Main
function System(args) {
    // Logic
    useEffect(() => {
        ParticlesSystemLogic.setup(args);

        const handleMouseMove = (event) => {
            ParticlesManager.handle('mouseMove', { event, ...args });
        };

        ParticlesManager.addAll({ handleMouseMove });
        return () => ParticlesManager.removeAll({ handleMouseMove });
    }, [args]);

    useFrame(({ clock }) => {
        args.objects.clock.current = clock;
        ParticlesManager.update("particles", args);
    });

    return <Particles {...args} />;
}

export default System;