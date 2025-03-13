import { Color } from 'three';
import { EffectManager } from '../../../../../logic/effects/manager';
import { UpdateStrategy } from '../../../../../logic/updates/strategy';

export class ColorUpdate extends UpdateStrategy {
    apply({ i, colors, particles, ...args }) {
        const final = new Color();
        EffectManager.addEffect("color", { colors, particles, i, final, ...args });
        colors.set(final.toArray(), i * 3);
    }
}