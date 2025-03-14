/**
 * Resize handler strategy for particle system
 */

import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";
import { ParticlesManager } from '../../../../logic/manager';

export class ResizeHandler extends ModelStrategy {
    /**
     * Execute window resize events
     * @param {Object} args - Arguments containing event and particle system data
     */
    execute({ event, ...args }) {
        const { particles } = args.refs;
        ParticlesManager.setup('camera', args);
        const { particle } = args.config;
        const ratio = window.innerWidth / window.innerHeight;
        const size = Math.min(Math.max(particle.size * ratio, 0), particle.size);
        particles.current.material.size = size;
    }
}