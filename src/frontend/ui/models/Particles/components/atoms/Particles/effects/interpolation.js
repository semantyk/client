import { Vector3 } from 'three';
import { ease } from "@semantyk/frontend/ui/models/Particles/logic";
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class InterpolationEffect extends ModelStrategy {
    execute({ config, i, final, objects: { clock }, refs: { particles } }) {
        const { ideal, initial } = particles.current.data.positions;
        const { animations: { interpolation: { duration } } } = config;

        const source = new Vector3().fromArray(initial, i * 3);
        const target = new Vector3().fromArray(ideal, i * 3);

        const elapsedTime = clock.current.getElapsedTime();
        const easedTime = ease(elapsedTime, duration);
        source.multiplyScalar(1 - easedTime);
        target.multiplyScalar(easedTime);

        final.add(source);
        final.add(target);
    }
}