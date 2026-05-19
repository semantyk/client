/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `interpolation.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Interpolation effect for particles in the Particles model.
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

import { Vector3 } from 'three';
import { ease } from "@semantyk/frontend/ui/models/Particles/utils/ease";
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export class InterpolationEffect extends ModelStrategy {
    static execute({ config, i, final, objects: { clock }, refs: { particles } }) {
        const { ideal, initial } = particles.current.data.positions;
        const { animations: { interpolation: { duration } } } = config;

        const source = new Vector3().fromArray(initial, i * 3);
        const target = new Vector3().fromArray(ideal, i * 3);

        const elapsedTime = clock.current.getElapsedTime();
        const easedTime = ease(elapsedTime, duration);
        source.multiplyScalar(1 - easedTime);
        target.multiplyScalar(easedTime);

        final.add(source);
        final.add(target);
    }
}