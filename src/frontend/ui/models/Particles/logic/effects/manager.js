import { ChaosEffect } from '../../components/atoms/Particles/effects/chaos/effect';
import { ColorEffect } from '../../components/atoms/Particles/effects/color/effect';
import { PositionEffect } from '../../components/atoms/Particles/effects/position/effect';

/**
 * Manager class that handles all particle effects using the Strategy pattern
 */
export class EffectManager {
    static instance = new EffectManager();

    constructor() {
        this.strategies = {
            chaos: new ChaosEffect(),
            color: new ColorEffect(),
            position: new PositionEffect()
        };
    }

    addEffect(type, args) {
        const strategy = this.strategies[type];
        if (strategy) {
            strategy.apply(args);
        }
    }

    static addEffect(type, args) {
        return EffectManager.instance.addEffect(type, args);
    }
}

export const { addEffect } = EffectManager;