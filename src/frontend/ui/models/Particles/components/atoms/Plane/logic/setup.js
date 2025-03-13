/**
 * Plane setup strategy for particle system
 */

import { Plane, Vector3 } from 'three';
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class PlaneSetup extends ModelStrategy {
    /**
     * Execute plane setup
     * @param {Object} args - Arguments containing data and refs
     */
    execute({ data: { unit }, refs: { plane } }) {
        const normal = new Vector3(0, 0, 1);
        plane.current = new Plane(normal, unit / 2);
    }
}