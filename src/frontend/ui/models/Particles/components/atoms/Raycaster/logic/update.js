import { Vector2 } from 'three';
import { UpdateStrategy } from '../../../../logic/updates/strategy';

export class RaycasterUpdate extends UpdateStrategy {
    apply({ objects, refs }) {
        const { raycaster } = objects;
        const camera = refs.camera.current;
        const mouse = refs.mouse.current;
        const coords = new Vector2(mouse.x, mouse.y);
        raycaster.setFromCamera(coords, camera);
    }
}