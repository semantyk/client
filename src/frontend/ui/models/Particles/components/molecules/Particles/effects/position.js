import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";
import { InterpolationEffect } from './interpolation';
import { FlotationEffect } from './flotation';
import { EntropyEffect } from './entropy';
import { Vector3 } from 'three';
import { ChaosEffect } from "./chaos";

export class PositionEffect extends ModelStrategy {
    static execute({ object, i, idxs, ...args }) {
        const { particles } = args.refs;
        const final = new Vector3()

        //* Effects
        //! Order Matters
        EntropyEffect.execute({ i, idxs, final, ...args });
        ChaosEffect.execute({ i, idxs, final, ...args });
        InterpolationEffect.execute({ i, final, ...args });
        FlotationEffect.execute({ i, final, ...args });

        const positions = particles.current.geometry.attributes.position.array;
        positions.set(final.toArray(), i * 3);
    }
}