/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useRefs.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @created: Sep 17, 2024
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * Maintainer:
 *
 * @copyright: Semantyk © 2025. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { Color, Raycaster, TextureLoader } from "three";
//* Local Imports
import { props } from "@semantyk/frontend/ui/models/molecule/Particles/logic";
import useColorScheme from "@semantyk/frontend/hooks/useColorScheme";

//* Main
export function useArgs() {
    // Props
    const { general: { scale, size }, image: { path } } = props;
    // Hooks
    const { colorScheme } = useColorScheme();
    const { image } = useLoader(TextureLoader, path);
    // Logic
    const color = colorScheme === "light" ? 0 : 1;
    const colorV3 = new Color(color, color, color);
    // Return
    return {
        /// Data
        data: {
            color: colorV3,
            unit: scale * size
        },
        // Objects
        objects: {
            clock: useRef(),
            image,
            raycaster: new Raycaster()
        },
        // Refs
        refs: {
            box: useRef(),
            camera: useRef(),
            circle: useRef(),
            mouse: useRef({ x: 0, y: 0 }),
            particles: useRef(),
            plane: useRef(),
            rayLine: useRef(),
        },
    };
}