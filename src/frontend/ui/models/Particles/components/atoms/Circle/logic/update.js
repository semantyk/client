import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class CircleUpdate extends ModelStrategy {
    execute({ objects, refs, target }) {
        objects.raycaster.ray.intersectPlane(refs.plane.current, target);
        refs.circle.current.position.copy(target);
    }
}