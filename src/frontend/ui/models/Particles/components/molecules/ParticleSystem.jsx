/**
  * ParticleSystem.jsx
 * Molecule component that combines Particles with its logic
 */

//* Imports
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Particles from "../atoms/Particles";
import {
    setupObjects,
    updateObjects,
} from "@semantyk/frontend/ui/models/Particles/logic";
import { SetupManager } from "../../logic/setups/manager";
import { ListenerManager } from "../../logic/listeners/manager";
import { HandlerManager } from "../../logic/handlers/manager";

//* Main
export default function ParticleSystem(args) {
    // Logic
    useEffect(() => {
        setupObjects(args);

        const handleMouseMove = (event) => {
            HandlerManager.handleMouseMove(event, args);
        };

        const handleResize = (event) => {
            HandlerManager.handleResize(event, args);
        };

        ListenerManager.addEventListeners({ handleMouseMove, handleResize });
        return () => ListenerManager.removeEventListeners({ handleMouseMove, handleResize });
    }, [args]);

    useFrame(({ clock }) => {
        args.objects.clock.current = clock;
        updateObjects(args);
    });

    return <Particles {...args} />;
}