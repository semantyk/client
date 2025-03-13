import { Vector3 } from 'three';
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class FlotationEffect extends ModelStrategy {
    execute({ config, i, final, objects: { clock }, refs: { particles } }) {
        const { offsets } = particles.current.data.positions;
        const { animations: { flotation } } = config;
        const elapsedTime = clock.current.getElapsedTime();

        const vector = new Vector3().fromArray(offsets, i * 3);
        vector.addScalar(elapsedTime * flotation.speed);
        const effect = new Vector3(
            Math.sin(vector.x),
            Math.sin(vector.y)
        );
        effect.multiplyScalar(flotation.magnitude);

        final.add(effect);
    }
}