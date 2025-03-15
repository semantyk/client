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
import { Controls } from "./components/molecules";
import { System } from "./components/organisms";


//* Main
export default function Particles({ path }) {
    // Hooks
    const args = useArgs({ path });
    // Return
    return (<>
        <Controls {...args} />
        <System {...args} />
    </>);
}