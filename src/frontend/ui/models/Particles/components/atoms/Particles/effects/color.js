import { Color } from 'three';
import { ModelStrategy } from '@semantyk/frontend/ui/components/molecules/Model/logic/strategy';

export class ColorEffect extends ModelStrategy {
    static execute({ data: { color }, i, ...args }) {
        const chaoticValue = args.refs.particles.current.data.chaotic[i];
        const final = color.clone();
        const target = new Color(1, 0, 0);
        final.lerp(target, chaoticValue);
        args.refs.particles.current.geometry.attributes.color.set(final.toArray(), i * 3);
    }
}