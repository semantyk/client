/**
 * Particles.jsx
 * Atom component for the particles in the Particles model
 */

//* Main
function Particles({ config, refs }) {
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

export default Particles;