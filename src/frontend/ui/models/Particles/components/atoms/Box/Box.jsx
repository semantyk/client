/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Box.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Atom component for the box mesh in the Particles model.
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
export default function Box({ config, data, refs }) {
    // Props
    const { general: { showControls } } = config;
    // Return
    return (
        <mesh ref={refs.box} visible={showControls}>
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