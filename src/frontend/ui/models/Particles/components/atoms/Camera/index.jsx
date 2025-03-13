/**
 * Camera.jsx
 * Atom component for the perspective camera in the Particles model
 */

import { PerspectiveCamera } from "@react-three/drei";
import { CameraHelper } from "three";
import { useHelper } from "@react-three/drei";

export default function Camera({ config, refs }) {
    // Props
    const {
        general: { showHelpers }
    } = config;
    // Logic
    useHelper(showHelpers && refs.camera, CameraHelper);

    return (
        <PerspectiveCamera
            ref={refs.camera}
            {...config.camera}
        />
    );
}