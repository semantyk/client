/**
 * RayLine.jsx
 * Atom component for the ray line in the Particles model
 */

//* Imports
import { LineUpdate } from './logic/update';

export { LineUpdate };

//* Main
export default function RayLine({ config, refs }) {
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