import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";
import { Vector2 } from "three";

export default class RaycasterLogic extends ModelStrategy {
    static setup({ config, data: { unit }, objects: { raycaster } }) {
        const { animations: { chaos: { radius } } } = config;
        raycaster.params.Points.threshold = radius * unit;
    }

    static update({ objects, refs }) {
        const { raycaster } = objects;
        const camera = refs.camera.current;
        const mouse = refs.mouse.current;
        const coords = new Vector2(mouse.x, mouse.y);
        raycaster.setFromCamera(coords, camera);
    }
}