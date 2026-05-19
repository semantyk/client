/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Controls.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Molecule component for Particles debug controls.
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
import { OrbitControls } from "@react-three/drei";
import Box from "../../atoms/Box";
import Circle from "../../atoms/Circle/Circle";
import Plane from "../../atoms/Plane/Plane";
import RayLine from "../../atoms/RayLine/RayLine";
import Camera from "../../atoms/Camera/Camera";

//* Main
export default function Controls(args) {
    // Props
    const { general: { showControls } } = args.config;
    // Return
    return (<>
        <Box {...args} />
        <Camera {...args} />
        <Circle {...args} />
        <Plane {...args} />
        <RayLine {...args} />
        {showControls && <OrbitControls />}
    </>);
}