/**
  * ParticleSystem.jsx
 * Molecule component that combines Particles with its logic
 */

//* Imports
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Particles from "../../atoms/Particles/index.jsx";
import {
    setupObjects,
    updateObjects,
} from "@semantyk/frontend/ui/models/Particles/logic";
import { ParticlesModelManager } from "../../../logic/manager.js";

//* Main
export default function ParticlesSystem(args) {
    // Logic
    useEffect(() => {
        setupObjects(args);

        const handleMouseMove = (event) => {
            ParticlesModelManager.execute('handleEvent', 'mouse', event, args);
        };

        const handleResize = (event) => {
            ParticlesModelManager.execute('handleEvent', 'resize', event, args);
        };

        ParticlesModelManager.execute('addEventListeners', { handleMouseMove, handleResize });
        return () => ParticlesModelManager.execute('removeEventListeners', { handleMouseMove, handleResize });
    }, [args]);

    useFrame(({ clock }) => {
        args.objects.clock.current = clock;
        updateObjects(args);
    });

    return <Particles {...args} />;
}