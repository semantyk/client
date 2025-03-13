import { Vector3 } from 'three';
import { ease } from "@semantyk/frontend/ui/models/Particles/logic";
import { EffectStrategy } from '../../../../../logic/effects/strategy';

export class InterpolationEffect extends EffectStrategy {
    apply({ config, time, object, i, final }) {
        const { ideal, initial } = object.data.positions;
        const { animations: { interpolation: { duration } } } = config;

        const source = new Vector3().fromArray(initial, i * 3);
        const target = new Vector3().fromArray(ideal, i * 3);

        const easedTime = ease(time, duration);
        source.multiplyScalar(1 - easedTime);
        target.multiplyScalar(easedTime);

        final.add(source);
        final.add(target);
    }
}