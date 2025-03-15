//* Imports
import PlaneLogic from "./Plane.logic";

//* Main
function Plane({ config, data, refs }) {
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

Plane.logic = PlaneLogic;

export default Plane;