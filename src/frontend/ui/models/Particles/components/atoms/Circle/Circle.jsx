/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Circle.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Atom component for particle circles in the Particles model.
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
import CircleLogic from "./Circle.logic";
//* Main
function Circle({ config, data, refs }) {
    // Props
    const {
        general: { showControls },
        animations: { chaos: { radius } }
    } = config;
    // Return
    return (
        <mesh
            ref={refs.circle}
            position={[0, 0, -data.unit / 2]}
            visible={showControls}
        >
            <circleGeometry args={[data.unit * radius, 32]} />
            <meshBasicMaterial
                color="red"
                opacity={1}
                transparent
                wireframe
            />
        </mesh>
    );
}

Circle.logic = CircleLogic;

export default Circle;