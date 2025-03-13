import { BufferGeometry } from 'three';
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class LineUpdate extends ModelStrategy {
    execute({ objects, refs, target }) {
        const { origin } = objects.raycaster.ray;
        const points = [origin, target];
        const geometry = new BufferGeometry().setFromPoints(points);
        refs.rayLine.current.geometry.dispose();
        refs.rayLine.current.geometry = geometry;
    }
}