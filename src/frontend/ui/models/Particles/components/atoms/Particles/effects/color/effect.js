import { Color } from 'three';
import { EffectStrategy } from '../../../../../logic/effects/strategy';

export class ColorEffect extends EffectStrategy {
    apply({ particles, i, final, colors }) {
        const chaoticValue = particles.data.chaotic[i];
        const target = new Color(1, 0, 0);
        final.lerp(target, chaoticValue);
        colors.set(final.toArray(), i * 3);
    }
}