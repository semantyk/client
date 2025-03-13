import { UpdateManager } from '../../../../logic/updates/manager';
import { UpdateStrategy } from '../../../../logic/updates/strategy';

export class ParticlesUpdate extends UpdateStrategy {
    apply({ config, objects, refs: { mouse, particles }, ...args }) {
        const { clock } = objects;
        const { animations: { interpolation } } = config;

        const object = particles.current;
        const time = clock.current.getElapsedTime();
        const intersects = objects.raycaster.intersectObject(object);
        const idxs = new Set(intersects.map(({ index }) => index));
        const positions = object.geometry.attributes.position.array;

        for (let i = 0; i < object.data.count; i++) {
            if (time >= interpolation.duration) {
                UpdateManager.updateAttribute("chaos", {
                    config,
                    i,
                    idxs,
                    mouse,
                    particles: object,
                    ...args
                });
            }
            UpdateManager.updateAttribute("position", {
                config,
                i,
                idxs,
                object,
                positions,
                particles,
                time,
                ...args
            });
        }

        object.geometry.attributes.color.needsUpdate = true;
        object.geometry.attributes.position.needsUpdate = true;
    }
}