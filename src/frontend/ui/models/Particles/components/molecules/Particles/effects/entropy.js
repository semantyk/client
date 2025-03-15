import { Vector3 } from 'three';
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class EntropyEffect extends ModelStrategy {
    static execute({ config, i, idxs, final, ...args }) {
        const { animations: { expansion, interpolation } } = config;
        const elapsedTime = args.objects.clock.current.getElapsedTime();

        if (elapsedTime < interpolation.duration) return;
        const { ideal } = args.refs.particles.current.data.positions;
        const positions = args.refs.particles.current.geometry.attributes.position.array;

        const source = new Vector3().fromArray(positions, i * 3);
        const target = new Vector3().fromArray(ideal, i * 3);
        const effect = new Vector3().subVectors(source, target);
        effect.multiplyScalar(expansion.magnitude);

        final.add(effect);
    }
}