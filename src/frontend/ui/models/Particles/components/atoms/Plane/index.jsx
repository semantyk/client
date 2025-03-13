//* Imports
import { PlaneSetup } from './logic/setup';

export { PlaneSetup };

//* Main
export default function Plane({ config, data, refs }) {
    // Props
    const {
        general: { showHelpers }
    } = config;
    // Return
    return (
        <mesh
            ref={refs.plane}
            position={[0, 0, -data.unit / 2]}
            visible={showHelpers}
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