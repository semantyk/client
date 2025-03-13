/**
 * Raycaster setup strategy for particle system
 */

import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class RaycasterSetup extends ModelStrategy {
    /**
     * Execute raycaster setup
     * @param {Object} args - Arguments containing config, data, and objects
     */
    execute({ config, data: { unit }, objects: { raycaster } }) {
        const { animations: { chaos: { radius } } } = config;
        raycaster.params.Points.threshold = radius * unit;
    }
}