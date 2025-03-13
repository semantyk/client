import { EffectStrategy } from '../../../../../logic/effects/strategy';

export class ChaosEffect extends EffectStrategy {
    apply({ config, data, i, idxs, mouse, particles }) {
        const { unit } = data;
        const { animations: { chaos, order } } = config;

        let magnitude;
        let currentChaos = particles.data.chaotic[i];

        if (idxs.has(i) && mouse.current.isMoving) {
            currentChaos += chaos.magnitude;
            magnitude = Math.min(currentChaos, 1);
        } else {
            currentChaos -= order.magnitude / unit;
            magnitude = Math.max(currentChaos, 0);
        }

        particles.data.chaotic[i] = magnitude;
    }
}