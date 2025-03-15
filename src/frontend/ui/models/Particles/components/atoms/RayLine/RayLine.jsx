/**
 * RayLine.jsx
 * Atom component for the ray line in the Particles model
 */

//* Imports
import RayLineLogic from './RayLine.logic';

//* Main
function RayLine({ config, refs }) {
    // Props
    const {
        general: { showHelpers }
    } = config;
    // Return
    return (
        <line ref={refs.rayLine} visible={showHelpers}>
            <bufferGeometry />
            <lineBasicMaterial color="red" />
        </line>
    );
}

RayLine.logic = RayLineLogic;

export default RayLine;