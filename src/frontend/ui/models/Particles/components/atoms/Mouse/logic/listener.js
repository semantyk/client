import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class MouseListener extends ModelStrategy {
    add({ handleMouseMove }) {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleMouseMove);
    }

    remove({ handleMouseMove }) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleMouseMove);
    }
}