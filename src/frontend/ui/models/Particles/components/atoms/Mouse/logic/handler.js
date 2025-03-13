/**
 * Mouse handler strategy for particle system
 */

import { HandlerStrategy } from '../../../../logic/handlers/strategy';
import { updateOnMouseMove } from '../../../../logic/index';

export class MouseHandler extends HandlerStrategy {
    /**
     * Handle mouse/touch move events
     * @param {MouseEvent|TouchEvent} event - Mouse or touch event
     * @param {Object} args - Particle system arguments
     */
    handle(event, args) {
        const { mouse, moveMouseTimeout } = args.refs;
        clearTimeout(moveMouseTimeout.current);
        mouse.current.isMoving = true;
        moveMouseTimeout.current = setTimeout(() => mouse.current.isMoving = false, 1);

        let clientX, clientY;
        if (event.type === "mousemove") {
            clientX = event.clientX;
            clientY = event.clientY;
        } else if (event.type === "touchmove") {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        }

        updateOnMouseMove({
            events: { mousemove: { clientX, clientY } },
            ...args
        });
    }
}