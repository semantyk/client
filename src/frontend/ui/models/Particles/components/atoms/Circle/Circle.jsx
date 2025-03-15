/**
 * Circle.jsx
 * Atom component for the circle in the Particles model
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