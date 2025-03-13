import { Plane, Vector3 } from 'three';
import { SetupStrategy } from '../../../../logic/setups/strategy';

export class PlaneSetup extends SetupStrategy {
    apply({ data: { unit }, refs: { plane } }) {
        const normal = new Vector3(0, 0, 1);
        plane.current = new Plane(normal, unit / 2);
    }
}