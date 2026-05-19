/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Circle.logic.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Logic for the Circle atom in the Particles model.
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

export default class CircleLogic extends ModelStrategy {
    static update({ objects: { raycaster }, refs: { circle, plane }, target }) {
        raycaster.ray.intersectPlane(plane.current, target);
        circle.current.position.copy(target);
    }
}