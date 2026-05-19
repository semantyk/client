/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Camera.jsx`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Atom component for the camera in the Particles model.
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

import { PerspectiveCamera } from "@react-three/drei";
import { CameraHelper } from "three";
import { useHelper } from "@react-three/drei";
import CameraLogic from "./Camera.logic";
function Camera({ config, refs }) {
    // Props
    const {
        general: { showControls }
    } = config;
    // Logic
    useHelper(showControls && refs.camera, CameraHelper);

    return (
        <PerspectiveCamera
            ref={refs.camera}
            {...config.camera}
        />
    );
}

Camera.logic = CameraLogic;

export default Camera;