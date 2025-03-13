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
import Controls from "./components/molecules/Controls";
import ParticlesSystem from "./components/molecules/ParticlesSystem";
import Camera from "./components/atoms/Camera";

//* Main
export default function ParticlesModel() {
    // Hooks
    const args = useArgs();
    // Return
    return (<>
        <Controls {...args} />
        <ParticlesSystem {...args} />
    </>);
}