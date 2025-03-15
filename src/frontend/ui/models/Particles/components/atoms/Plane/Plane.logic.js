import { Plane, Vector3 } from "three";
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export default class PlaneLogic extends ModelStrategy {
    static setup({ data: { unit }, refs: { plane } }) {
        const normal = new Vector3(0, 0, 1);
        plane.current = new Plane(normal, unit / 2);
    }
}