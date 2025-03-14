/**
  * ParticleSystem.jsx
 * Molecule component that combines Particles with its logic
 */

//* Imports
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Particles from "../../atoms/Particles/index.jsx";
import {
    setup,
    update,
} from "@semantyk/frontend/ui/models/Particles/logic";
import { ParticlesManager } from "../../../logic/manager.js";

//* Main
export default function ParticlesSystem(args) {
    // Logic
    useEffect(() => {
        setup(args);

        const handleMouseMove = (event) => {
            ParticlesManager.handle('mouseMove', { event, ...args });
        };

        const handleResize = (event) => {
            ParticlesManager.handle('resize', { event, ...args });
        };

        ParticlesManager.execute('addAll', 'listener', { handleMouseMove, handleResize });
        return () => ParticlesManager.execute('removeAll', 'listener', { handleMouseMove, handleResize });
    }, [args]);

    useFrame(({ clock }) => {
        args.objects.clock.current = clock;
        update(args);
    });

    return <Particles {...args} />;
}