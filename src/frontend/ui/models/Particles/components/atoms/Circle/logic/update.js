import { UpdateStrategy } from '../../../../logic/updates/strategy';

export class CircleUpdate extends UpdateStrategy {
    apply({ objects, refs, target }) {
        objects.raycaster.ray.intersectPlane(refs.plane.current, target);
        refs.circle.current.position.copy(target);
    }
}