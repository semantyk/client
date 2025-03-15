import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";
import { BufferGeometry } from "three";

export default class RayLineLogic extends ModelStrategy {
    static update({ objects, refs, target }) {
        const { origin } = objects.raycaster.ray;
        const points = [origin, target];
        const geometry = new BufferGeometry().setFromPoints(points);
        refs.rayLine.current.geometry.dispose();
        refs.rayLine.current.geometry = geometry;
    }
}