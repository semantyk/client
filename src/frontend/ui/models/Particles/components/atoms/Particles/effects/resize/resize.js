/**
 * Resize handler strategy for particle system
 */

import { HandlerStrategy } from '../../../../../logic/handlers/strategy';
import { SetupManager } from '../../../../../logic/setups/manager';

export class ResizeHandler extends HandlerStrategy {
    /**
     * Handle window resize events
     * @param {Event} event - Window resize event
     * @param {Object} args - Particle system arguments
     */
    handle(event, args) {
        const { particles } = args.refs;
        SetupManager.setupObject("camera", args);
        const { particle } = args.config;
        const ratio = window.innerWidth / window.innerHeight;
        const size = Math.min(Math.max(particle.size * ratio, 0), particle.size);
        particles.current.material.size = size;
    }
}