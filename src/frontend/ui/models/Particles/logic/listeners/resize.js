import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class ResizeListener extends ModelStrategy {
    add({ handleResize }) {
        window.addEventListener("resize", handleResize);
    }

    remove({ handleResize }) {
        window.removeEventListener("resize", handleResize);
    }
}