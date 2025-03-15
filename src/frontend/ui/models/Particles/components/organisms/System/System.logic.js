import { ParticlesManager } from "../../../Particles.logic";
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export default class ParticlesSystemLogic extends ModelStrategy {
    static setup(args) {
        ParticlesManager.setup('camera', args);
        ParticlesManager.setup('particles', args);
        ParticlesManager.setup('plane', args);
        ParticlesManager.setup('raycaster', args);
    }
}