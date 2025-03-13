import { Color } from 'three';
import { ParticleManager } from '../../../../../logic/manager';
import { ParticleStrategy } from '../../../../../logic/strategy';

export class ColorUpdate extends ParticleStrategy {
    apply({ i, colors, particles, ...args }) {
        const final = new Color();
        ParticleManager.addEffect("color", { colors, particles, i, final, ...args });
        colors.set(final.toArray(), i * 3);
    }
}