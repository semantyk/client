import { ParticlesManager } from '../../../../logic/manager';
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class ParticlesUpdate extends ModelStrategy {
    execute(args) {
        const intersects = args.objects.raycaster.intersectObject(args.refs.particles.current);
        const idxs = new Set(intersects.map(({ index }) => index));

        for (let i = 0; i < args.refs.particles.current.data.count; i++) {
            ParticlesManager.add('effects', "color", { i, ...args });
            ParticlesManager.add('effects', "position", { i, idxs, ...args });
        }

        args.refs.particles.current.geometry.attributes.color.needsUpdate = true;
        args.refs.particles.current.geometry.attributes.position.needsUpdate = true;
    }
}