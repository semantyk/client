import { CircleUpdate } from '../../components/atoms/Circle/logic/update';
import { LineUpdate } from '../../components/atoms/RayLine/logic/line';
import { MouseUpdate } from '../../components/atoms/Mouse/logic/update';
import { ParticlesUpdate } from '../../components/atoms/Particles/logic/update';
import { RaycasterUpdate } from '../../components/atoms/Raycaster/logic/update';
import { ChaosUpdate } from '../../components/atoms/Particles/effects/chaos/update';
import { ColorUpdate } from '../../components/atoms/Particles/effects/color/update';
import { PositionUpdate } from '../../components/atoms/Particles/effects/position/update';

/**
 * Manager class that handles all particle updates using the Strategy pattern
 */
export class UpdateManager {
    static instance = new UpdateManager();

    constructor() {
        this.objectStrategies = {
            circle: new CircleUpdate(),
            line: new LineUpdate(),
            mouse: new MouseUpdate(),
            particles: new ParticlesUpdate(),
            raycaster: new RaycasterUpdate(),
        };

        this.attributeStrategies = {
            chaos: new ChaosUpdate(),
            color: new ColorUpdate(),
            position: new PositionUpdate()
        };
    }

    updateObject(type, args) {
        const strategy = this.objectStrategies[type];
        if (strategy) {
            strategy.apply(args);
        }
    }

    updateAttribute(type, args) {
        const strategy = this.attributeStrategies[type];
        if (strategy) {
            strategy.apply(args);
        }
    }

    static updateObject(type, args) {
        return UpdateManager.instance.updateObject(type, args);
    }

    static updateAttribute(type, args) {
        return UpdateManager.instance.updateAttribute(type, args);
    }
}

export const { updateObject, updateAttribute } = UpdateManager;