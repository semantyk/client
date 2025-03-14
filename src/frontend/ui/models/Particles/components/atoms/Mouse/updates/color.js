import { Color } from 'three';
import { ParticleStrategy } from '../../../../../logic/strategy';
import { ParticlesManager } from '../../../../logic/manager';

export class ColorUpdate extends ParticleStrategy {
    apply({ i, colors, particles, ...args }) {
        const final = new Color();
        ParticlesManager.affect("color", { colors, particles, i, final, ...args });
        colors.set(final.toArray(), i * 3);
    }
}