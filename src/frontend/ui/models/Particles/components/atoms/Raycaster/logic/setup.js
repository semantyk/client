import { SetupStrategy } from '../../../../logic/setups/strategy';

export class RaycasterSetup extends SetupStrategy {
    apply({ config, data: { unit }, objects: { raycaster } }) {
        const { animations: { chaos: { radius } } } = config;
        raycaster.params.Points.threshold = radius * unit;
    }
}