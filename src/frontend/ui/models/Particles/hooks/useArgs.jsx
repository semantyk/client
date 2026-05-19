/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `useArgs.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Hook assembling refs, config, and data args for the Particles model.
 *
 * @created: Sep 17, 2024
 * @modified: May 19, 2026
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2026. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { Color, Raycaster, TextureLoader } from "three";
//* Local Imports
import { config } from "@semantyk/frontend/ui/models/Particles/config";
import useColorScheme from "@semantyk/frontend/hooks/useColorScheme";

//* Main
export function useArgs({ path }) {
    // Props
    const { general: { scale, size } } = config;
    // Hooks
    const { colorScheme } = useColorScheme();
    const { image } = useLoader(TextureLoader, path);
    // Logic
    const color = colorScheme === "light" ? 0 : 1;
    const colorV3 = new Color(color, color, color);
    // Return
    return {
        // Data
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
        // Props
        config,
        // Refs
        refs: {
            box: useRef(),
            camera: useRef(),
            circle: useRef(),
            mouse: useRef({ current: { x: 0, y: 0, isMoving: false } }),
            moveMouseTimeout: useRef(),
            particles: useRef(),
            plane: useRef(),
            rayLine: useRef(),
        },
    };
}