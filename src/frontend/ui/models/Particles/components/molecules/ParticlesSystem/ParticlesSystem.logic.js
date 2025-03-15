import { ParticlesManager } from "../../../logic/manager";
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export default class ParticlesSystemLogic extends ModelStrategy {
    add({ handleResize }) {
        window.addEventListener("resize", handleResize);
    }

    remove({ handleResize }) {
        window.removeEventListener("resize", handleResize);
    }

    setup(args) {
        ParticlesManager.setup('camera', args);
        ParticlesManager.setup('particles', args);
        ParticlesManager.setup('plane', args);
        ParticlesManager.setup('raycaster', args);
    }

    update(args) {
        ParticlesManager.update("particles", args);
    }
}
