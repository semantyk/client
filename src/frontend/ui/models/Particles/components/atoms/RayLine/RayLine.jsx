/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `RayLine.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Atom component for ray line visualization in the Particles model.
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
import RayLineLogic from './RayLine.logic';

//* Main
function RayLine({ config, refs }) {
    // Props
    const {
        general: { showControls }
    } = config;
    // Return
    return (
        <line ref={refs.rayLine} visible={showControls}>
            <bufferGeometry />
            <lineBasicMaterial color="red" />
        </line>
    );
}

RayLine.logic = RayLineLogic;

export default RayLine;