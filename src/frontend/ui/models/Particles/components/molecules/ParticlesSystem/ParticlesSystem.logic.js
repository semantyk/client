import { ParticlesManager } from "../../../logic/manager";
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export default class ParticlesSystemLogic extends ModelStrategy {
    static add({ handleResize }) {
        window.addEventListener("resize", handleResize);
    }

    static remove({ handleResize }) {
        window.removeEventListener("resize", handleResize);
    }

    static setup(args) {
        ParticlesManager.setup('camera', args);
        ParticlesManager.setup('particles', args);
        ParticlesManager.setup('plane', args);
        ParticlesManager.setup('raycaster', args);
    }

    update(args) {
        ParticlesManager.update("particles", args);
    }
}