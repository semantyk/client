import { Vector3 } from 'three';
import { EffectStrategy } from '../../../../../logic/effects/strategy';

export class ExpansionEffect extends EffectStrategy {
    apply({ config, object, i, final }) {
        const { animations: { expansion } } = config;
        const chaosValue = object.data.chaotic[i];
        const { ideal } = object.data.positions;
        const positions = object.geometry.attributes.position.array;

        const source = new Vector3().fromArray(positions, i * 3);
        const target = new Vector3().fromArray(ideal, i * 3);
        const effect = new Vector3().subVectors(source, target);
        effect.multiplyScalar(chaosValue);
        effect.multiplyScalar(expansion.magnitude);

        final.add(effect);
    }
}