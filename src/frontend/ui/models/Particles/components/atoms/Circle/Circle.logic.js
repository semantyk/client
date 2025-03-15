import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export default class CircleLogic extends ModelStrategy {
    static update({ objects, refs, target }) {
        objects.raycaster.ray.intersectPlane(refs.plane.current, target);
        refs.circle.current.position.copy(target);
    }
}