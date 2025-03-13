/**
 * Particles.jsx
 * Atom component for the particles in the Particles model
 */

export default function Particles({ config, refs }) {
    return (
        <points ref={refs.particles}>
            <bufferGeometry />
            <pointsMaterial
                vertexColors
                {...config.particle}
            />
        </points>
    );
}