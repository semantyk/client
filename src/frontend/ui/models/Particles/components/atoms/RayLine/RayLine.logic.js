/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `RayLine.logic.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Logic for the RayLine atom in the Particles model.
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
import { BufferGeometry } from "three";

export default class RayLineLogic extends ModelStrategy {
    static update({ objects, refs, target }) {
        const { origin } = objects.raycaster.ray;
        const points = [origin, target];
        const geometry = new BufferGeometry().setFromPoints(points);
        refs.rayLine.current.geometry.dispose();
        refs.rayLine.current.geometry = geometry;
    }
}