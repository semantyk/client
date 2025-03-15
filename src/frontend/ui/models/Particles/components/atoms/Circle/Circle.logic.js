import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export default class CircleLogic extends ModelStrategy {
    static update({ objects: { raycaster }, refs: { circle, plane }, target }) {
        raycaster.ray.intersectPlane(plane.current, target);
        circle.current.position.copy(target);
    }
}