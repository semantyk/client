import { onMouseMove } from "@semantyk/frontend/logic/services/callbacks";
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";
import { updateOnMouseMove } from "../../../logic";

export default class MouseLogic extends ModelStrategy {
    add({ handleMouseMove }) {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleMouseMove);
    }

    remove({ handleMouseMove }) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleMouseMove);
    }

    handle({ event, ...args }) {
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

    update({ refs, events }) {
        const { x, y } = onMouseMove(events.mousemove);
        refs.mouse.current.x = x * 2 - 1;
        refs.mouse.current.y = -y * 2 + 1;
    }
}