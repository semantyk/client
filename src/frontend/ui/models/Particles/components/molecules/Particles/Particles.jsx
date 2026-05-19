/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Particles.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Molecule component rendering the particle field.
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