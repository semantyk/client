/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `chaos.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Chaos effect for particle motion in the Particles model.
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

import { ModelStrategy } from '@semantyk/frontend/ui/components/molecules/Model/logic/strategy';

export class ChaosEffect extends ModelStrategy {
    static execute({ config, data, i, idxs, final, objects: { clock }, refs: { mouse, particles } }) {
        const { unit } = data;
        const { animations: { chaos, order, interpolation } } = config;
        const elapsedTime = clock.current.getElapsedTime();

        if (elapsedTime < interpolation.duration) return;

        let magnitude;
        let currentChaos = particles.current.data.chaotic[i];

        if (idxs.has(i) && mouse.current.isMoving) {
            currentChaos += chaos.magnitude;
            magnitude = Math.min(currentChaos, 1);
        } else {
            currentChaos -= order.magnitude / unit;
            magnitude = Math.max(currentChaos, 0);
        }

        particles.current.data.chaotic[i] = magnitude;
        final.multiplyScalar(magnitude);
    }
}