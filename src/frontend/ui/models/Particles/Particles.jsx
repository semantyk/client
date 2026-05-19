/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Particles.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Scene component mounting the Particles 3D model in the canvas.
 *
 * @created: Mar 13, 2025
 * @modified: May 19, 2026
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2026. All rights reserved.
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