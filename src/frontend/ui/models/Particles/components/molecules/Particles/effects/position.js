/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `position.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Position effect for particles in the Particles model.
 *
 * @created: Mar 14, 2025
 * @modified: May 19, 2026
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2026. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

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