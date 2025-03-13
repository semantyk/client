import { ModelStrategy } from '@semantyk/frontend/ui/components/molecules/Model/logic/strategy';

export class ChaosEffect extends ModelStrategy {
    execute({ config, data, i, idxs, final, objects: { clock }, refs: { mouse, particles } }) {
        const { unit } = data;
        const { animations: { chaos, order, interpolation } } = config;
        const elapsedTime = clock.current.getElapsedTime();

        if (elapsedTime < interpolation.duration) return;

        let magnitude;
        let currentChaos = particles.current.data.chaotic[i];

        if (idxs.has(i) && mouse.current.isMoving) {
            currentChaos += chaos.magnitude;
            magnitude = Math.min(currentChaos, 1);
        } else {
            currentChaos -= order.magnitude / unit;
            magnitude = Math.max(currentChaos, 0);
        }

        particles.current.data.chaotic[i] = magnitude;
        final.multiplyScalar(magnitude);
    }
}