/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Plane.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Atom component for the interaction plane in the Particles model.
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
import PlaneLogic from "./Plane.logic";

//* Main
function Plane({ config, data, refs }) {
    // Props
    const {
        general: { showControls }
    } = config;
    // Return
    return (
        <mesh
            ref={refs.plane}
            position={[0, 0, -data.unit / 2]}
            visible={showControls}
        >
            <planeGeometry args={[data.unit, data.unit]} />
            <meshBasicMaterial
                color={data.color}
                opacity={1}
                transparent
                wireframe
            />
        </mesh>
    );
}

Plane.logic = PlaneLogic;

export default Plane;