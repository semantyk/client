import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";
import { InterpolationEffect } from './interpolation';
import { FlotationEffect } from './flotation';
import { EntropyEffect } from './entropy';
import { Vector3 } from 'three';
import { ChaosEffect } from "./chaos";

export class PositionEffect extends ModelStrategy {
    constructor() {
        super();
        this.chaosEffect = new ChaosEffect();
        this.entropyEffect = new EntropyEffect();
        this.interpolationEffect = new InterpolationEffect();
        this.flotationEffect = new FlotationEffect();
    }

    execute({ i, idxs, ...args }) {
        const { particles } = args.refs;
        const final = new Vector3()

        //* Effects
        //! Order Matters
        this.entropyEffect.execute({ i, idxs, final, ...args });
        this.chaosEffect.execute({ i, idxs, final, ...args });
        this.interpolationEffect.execute({ i, final, ...args });
        this.flotationEffect.execute({ i, final, ...args });

        const positions = particles.current.geometry.attributes.position.array;
        positions.set(final.toArray(), i * 3);
    }
}