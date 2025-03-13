/**
 * Mouse handler strategy for particle system
 */

import { Vector2 } from 'three';
import { ModelStrategy } from '@semantyk/frontend/ui/components/molecules/Model/logic/strategy';
import { updateOnMouseMove } from '../../../../logic/index';

export class MouseHandler extends ModelStrategy {
    /**
     * Execute mouse/touch move events
     * @param {Object} args - Arguments containing event and particle system data
     */
    execute({ event, ...args }) {
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