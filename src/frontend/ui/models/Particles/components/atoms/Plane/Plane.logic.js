/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Plane.logic.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Logic for the Plane atom in the Particles model.
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

import { Plane, Vector3 } from "three";
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export default class PlaneLogic extends ModelStrategy {
    static setup({ data: { unit }, refs: { plane } }) {
        const normal = new Vector3(0, 0, 1);
        plane.current = new Plane(normal, unit / 2);
    }
}