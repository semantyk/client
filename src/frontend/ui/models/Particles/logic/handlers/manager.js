/**
 * Manager for particle system event handlers
 */

import { MouseHandler } from '../../components/atoms/Mouse/logic/handler';
import { ResizeHandler } from '../../components/atoms/Particles/effects/resize/resize';

export class HandlerManager {
    static #instance = null;
    #mouseHandler = new MouseHandler();
    #resizeHandler = new ResizeHandler();

    /**
     * Get the singleton instance
     * @returns {HandlerManager}
     */
    static getInstance() {
        if (!HandlerManager.#instance) {
            HandlerManager.#instance = new HandlerManager();
        }
        return HandlerManager.#instance;
    }

    /**
     * Handle mouse/touch move event
     * @param {MouseEvent|TouchEvent} event - Mouse or touch event
     * @param {Object} args - Particle system arguments
     */
    handleMouseMove(event, args) {
        this.#mouseHandler.handle(event, args);
    }

    /**
     * Handle window resize event
     * @param {Event} event - Window resize event
     * @param {Object} args - Particle system arguments
     */
    handleResize(event, args) {
        this.#resizeHandler.handle(event, args);
    }

    /**
     * Static method to handle mouse/touch move event
     * @param {MouseEvent|TouchEvent} event - Mouse or touch event
     * @param {Object} args - Particle system arguments
     */
    static handleMouseMove(event, args) {
        HandlerManager.getInstance().handleMouseMove(event, args);
    }

    /**
     * Static method to handle window resize event
     * @param {Event} event - Window resize event
     * @param {Object} args - Particle system arguments
     */
    static handleResize(event, args) {
        HandlerManager.getInstance().handleResize(event, args);
    }
}