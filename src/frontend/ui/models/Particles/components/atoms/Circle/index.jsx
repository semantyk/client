/**
 * Circle.jsx
 * Atom component for the circle in the Particles model
 */

//* Main
export default function Circle({ config, data, refs }) {
    // Props
    const {
        general: { showHelpers },
        animations: { chaos: { radius } }
    } = config;
    // Return
    return (
        <mesh
            ref={refs.circle}
            position={[0, 0, -data.unit / 2]}
            visible={showHelpers}
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