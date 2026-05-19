/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Raycaster.logic.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Logic for the Raycaster atom in the Particles model.
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
import { Vector2 } from "three";

export default class RaycasterLogic extends ModelStrategy {
    static setup({ config, data: { unit }, objects: { raycaster } }) {
        const { animations: { chaos: { radius } } } = config;
        raycaster.params.Points.threshold = radius * unit;
    }

    static update({ objects, refs }) {
        const { raycaster } = objects;
        const camera = refs.camera.current;
        const mouse = refs.mouse.current;
        const coords = new Vector2(mouse.x, mouse.y);
        raycaster.setFromCamera(coords, camera);
    }
}