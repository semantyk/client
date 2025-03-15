import { onMouseMove } from "@semantyk/frontend/logic/services/callbacks";
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";
import { Vector3 } from "three";
import { ParticlesManager } from "../../../Particles.logic";

export default class MouseLogic extends ModelStrategy {
    static add({ handleMouseMove }) {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleMouseMove);
    }

    static remove({ handleMouseMove }) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleMouseMove);
    }

    static handle({ event, ...args }) {
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

        const target = new Vector3()
        const events = { mousemove: { clientX, clientY } }
        ParticlesManager.update("circle", { events, target, ...args });
        ParticlesManager.update("rayLine", { events, target, ...args });
        ParticlesManager.update("mouse", { events, ...args });
        ParticlesManager.update("raycaster", { events, ...args });
    }

    static update({ refs, events }) {
        const { x, y } = onMouseMove(events.mousemove);
        refs.mouse.current.x = x * 2 - 1;
        refs.mouse.current.y = -y * 2 + 1;
    }
}