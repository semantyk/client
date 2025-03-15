/**
 * Box.jsx
 * Atom component for the box in the Particles model
 */

//* Main
export default function Box({ config, data, refs }) {
    // Props
    const { general: { showHelpers } } = config;
    // Return
    return (
        <mesh ref={refs.box} visible={showHelpers}>
            <boxGeometry args={[data.unit, data.unit, data.unit]} />
            <meshBasicMaterial
                color={-data.color.r}
                opacity={0.1}
                transparent
                wireframe
            />
        </mesh>
    );
}