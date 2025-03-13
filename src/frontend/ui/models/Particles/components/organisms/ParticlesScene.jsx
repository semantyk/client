/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `ParticlesScene.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: This file contains the logic for the ParticlesScene component.
 *
 * @created: Mar 13, 2025
 * @modified: Mar 13, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { useArgs } from "@semantyk/frontend/ui/models/Particles/hooks/useArgs";
import { config } from "@semantyk/frontend/ui/models/Particles/config";
import Camera from "../atoms/Camera";
import Controls from "../atoms/Controls";
import Box from "../atoms/Box";
import Circle from "../atoms/Circle";
import ParticleSystem from "../molecules/ParticleSystem";
import Plane from "../atoms/Plane";
import RayLine from "../atoms/RayLine";

//* Main
export default function ParticlesScene() {
    // Hooks
    const args = useArgs();
    // Return
    return (<>
        <Camera {...args} />
        <Controls {...args} />
        <Box {...args} />
        <Circle {...args} />
        <ParticleSystem {...args} />
        <Plane {...args} />
        <RayLine {...args} />
    </>);
}