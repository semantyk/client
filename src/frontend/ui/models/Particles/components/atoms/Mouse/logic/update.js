import { onMouseMove } from "@semantyk/frontend/logic/services/callbacks";
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class MouseUpdate extends ModelStrategy {
    execute({ refs, events }) {
        const { x, y } = onMouseMove(events.mousemove);
        refs.mouse.current.x = x * 2 - 1;
        refs.mouse.current.y = -y * 2 + 1;
    }
}