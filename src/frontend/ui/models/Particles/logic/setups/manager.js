import { CameraSetup } from '../../components/atoms/Camera/logic/setup';
import { ParticlesSetup } from '../../components/atoms/Particles/logic/setup';
import { PlaneSetup } from '../../components/atoms/Plane/logic/setup';
import { RaycasterSetup } from '../../components/atoms/Raycaster/logic/setup';

/**
 * Manager class that handles all particle setups using the Strategy pattern
 */
export class SetupManager {
    static instance = new SetupManager();

    constructor() {
        this.strategies = {
            camera: new CameraSetup(),
            particles: new ParticlesSetup(),
            plane: new PlaneSetup(),
            raycaster: new RaycasterSetup(),
        };
    }

    setupObject(type, args) {
        const strategy = this.strategies[type];
        if (strategy) {
            strategy.apply(args);
        }
    }

    static setupObject(type, args) {
        return SetupManager.instance.setupObject(type, args);
    }
}

export const { setupObject } = SetupManager;