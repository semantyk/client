import { Vector3 } from 'three';
import { EffectManager } from '../../../../../logic/effects/manager';
import { UpdateStrategy } from '../../../../../logic/updates/strategy';

export class PositionUpdate extends UpdateStrategy {
    apply({ object, positions, i, ...args }) {
        const final = new Vector3();
        EffectManager.addEffect("position", { positions, object, i, final, ...args });
        positions.set(final.toArray(), i * 3);
    }
}