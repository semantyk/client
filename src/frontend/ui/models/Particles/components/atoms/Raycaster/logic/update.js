import { Vector2 } from 'three';
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class RaycasterUpdate extends ModelStrategy {
    execute({ objects, refs }) {
        const { raycaster } = objects;
        const camera = refs.camera.current;
        const mouse = refs.mouse.current;
        const coords = new Vector2(mouse.x, mouse.y);
        raycaster.setFromCamera(coords, camera);
    }
}