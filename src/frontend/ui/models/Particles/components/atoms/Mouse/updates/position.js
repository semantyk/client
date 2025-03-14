import { Vector3 } from 'three';
import { ParticleManager } from '../../../../../logic/manager';
import { ParticleStrategy } from '../../../../../logic/strategy';

export class PositionUpdate extends ParticleStrategy {
    apply({ object, positions, i, ...args }) {
        const final = new Vector3();
        ParticleManager.add("effects", "position", { positions, object, i, final, ...args });
        positions.set(final.toArray(), i * 3);
    }
}