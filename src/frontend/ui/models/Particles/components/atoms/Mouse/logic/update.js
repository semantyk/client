import { onMouseMove } from "@semantyk/frontend/logic/services/callbacks";
import { UpdateStrategy } from '../../../../logic/updates/strategy';

export class MouseUpdate extends UpdateStrategy {
    apply({ refs, events }) {
        const { x, y } = onMouseMove(events.mousemove);
        refs.mouse.current.x = x * 2 - 1;
        refs.mouse.current.y = -y * 2 + 1;
    }
}