/*
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `effects.js`
 * client | Semantyk
 *
 * Created: Sep 17, 2024
 * Modified: Sep 17, 2024
 *
 * Author: Semantyk Team
 * Maintainer:
 *
 * Copyright © Semantyk 2024. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

import {
    ease,
    props,
} from "@semantyk/frontend/ui/models/molecule/Particles/logic";
import { Vector3 } from "three";

//* Main
export function addEffect(type, args) {
    switch (type) {
        case "chaos":
            return addChaosEffect(args);
        case "flotation":
            return addFlotationEffect(args);
        case "interpolation":
            return addInterpolationEffect(args);
        default:
            return;
    }
}

// - chaos
export function addChaosEffect(args) {
    // TODO: Implement chaos effect
}

// - flotation
export function addFlotationEffect(args) {
    const { particles, i, final, time, unit } = args;
    // Props
    const { offsets } = particles.data.positions;
    const { animations: { flotation } } = props;
    // Logic
    const vector = new Vector3().fromArray(offsets, i * 3);
    vector.addScalar(time * flotation.speed * unit);
    const effect = new Vector3(
        Math.sin(vector.x),
        Math.sin(vector.y),
        Math.sin(vector.z)
    );
    effect.multiplyScalar(flotation.magnitude);
    effect.multiplyScalar(unit);
    // Prepare for Update
    final.add(effect);
}

// - interpolation
export function addInterpolationEffect(args) {
    // Args
    const { particles, i, final, time } = args;
    // Props
    const { ideal, initial } = particles.data.positions;
    const { interpolation: { duration } } = props.animations;
    // Logic
    const source = new Vector3().fromArray(initial, i * 3);
    const target = new Vector3().fromArray(ideal, i * 3);
    // - ease time
    const easedTime = ease(time, duration);
    // - interpolate
    source.multiplyScalar(1 - easedTime);
    target.multiplyScalar(easedTime);
    // Add Effect
    final.add(source);
    final.add(target);
}