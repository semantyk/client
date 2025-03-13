import { EffectStrategy } from '../../../../../logic/effects/strategy';
import { InterpolationEffect } from '../interpolation/effect';
import { FlotationEffect } from '../flotation/effect';
import { ExpansionEffect } from '../expansion/effect';

export class PositionEffect extends EffectStrategy {
    constructor() {
        super();
        this.interpolationEffect = new InterpolationEffect();
        this.flotationEffect = new FlotationEffect();
        this.expansionEffect = new ExpansionEffect();
    }

    apply(args) {
        const { animations: { interpolation } } = args.config;

        this.interpolationEffect.apply(args);
        this.flotationEffect.apply(args);

        if (args.time >= interpolation.duration) {
            this.expansionEffect.apply(args);
        }
    }
}