/**
  * ParticleSystem.jsx
 * Molecule component that combines Particles with its logic
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