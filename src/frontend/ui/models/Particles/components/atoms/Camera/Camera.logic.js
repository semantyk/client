/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Camera.logic.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Logic for the Camera atom in the Particles model.
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

import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export default class CameraLogic extends ModelStrategy {
    static setup({ config, data: { unit }, refs: { camera } }) {
        const { camera: { margin } } = config;

        const aspectRatio = window.innerWidth / window.innerHeight;
        let x = (1 + margin) / ((aspectRatio >= 1) ? 2 : (2 * aspectRatio));
        const fx = 2 * Math.atan(x) * (180 / Math.PI);

        camera.current.fov = fx;
        camera.current.aspect = aspectRatio;
        camera.current.position.z = unit / 2;
        camera.current.updateProjectionMatrix();
    }
}