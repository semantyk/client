/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `color.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Color effect for particles in the Particles model.
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

import { Color } from 'three';
import { ModelStrategy } from '@semantyk/frontend/ui/components/molecules/Model/logic/strategy';

export class ColorEffect extends ModelStrategy {
    static execute({ data: { color }, i, refs: { particles } }) {
        const chaoticValue = particles.current.data.chaotic[i];
        const final = color.clone();
        const target = new Color(1, 0, 0);
        final.lerp(target, chaoticValue);
        particles.current.geometry.attributes.color.set(final.toArray(), i * 3);
    }
}