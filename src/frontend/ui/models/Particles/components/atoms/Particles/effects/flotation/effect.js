import { Vector3 } from 'three';
import { EffectStrategy } from '../../../../../logic/effects/strategy';

export class FlotationEffect extends EffectStrategy {
    apply({ config, object, i, final, time }) {
        const { offsets } = object.data.positions;
        const { animations: { flotation } } = config;

        const vector = new Vector3().fromArray(offsets, i * 3);
        vector.addScalar(time * flotation.speed);
        const effect = new Vector3(
            Math.sin(vector.x),
            Math.sin(vector.y)
        );
        effect.multiplyScalar(flotation.magnitude);

        final.add(effect);
    }
}