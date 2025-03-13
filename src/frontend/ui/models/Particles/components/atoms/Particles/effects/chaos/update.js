import { UpdateStrategy } from '../../../../../logic/updates/strategy';
import { EffectManager } from '../../../../../logic/effects/manager';

export class ChaosUpdate extends UpdateStrategy {
    apply(params) {
        EffectManager.addEffect("chaos", params);
    }
}