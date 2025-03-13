import { BufferGeometry } from 'three';
import { UpdateStrategy } from '../../../../logic/updates/strategy';

export class LineUpdate extends UpdateStrategy {
    apply({ objects, refs, target }) {
        const { origin } = objects.raycaster.ray;
        const points = [origin, target];
        const geometry = new BufferGeometry().setFromPoints(points);
        refs.rayLine.current.geometry.dispose();
        refs.rayLine.current.geometry = geometry;
    }
}