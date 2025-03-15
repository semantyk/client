/**
  * ParticleSystem.jsx
 * Molecule component that combines Particles with its logic
 */

//* Imports
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Particles from "../../atoms/Particles/Particles.jsx";
import {
    update,
} from "@semantyk/frontend/ui/models/Particles/logic";
import { ParticlesManager } from "../../../logic/manager.js";

//* Main
function ParticlesSystem(args) {
    // Logic
    useEffect(() => {
        ParticlesManager.setup('particlesSystem', args);

        const handleMouseMove = (event) => {
            ParticlesManager.handle('mouseMove', { event, ...args });
        };

        ParticlesManager.addAll({ handleMouseMove });
        return () => ParticlesManager.removeAll({ handleMouseMove });
    }, [args]);

    useFrame(({ clock }) => {
        args.objects.clock.current = clock;
        update(args);
    });

    return <Particles {...args} />;
}

export default ParticlesSystem;