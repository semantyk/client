/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `effects.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @created: Sep 17, 2024
 * @modified: Mar 7, 2025
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2025. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

// - expansion
import {
    ease,
    props,
} from "@semantyk/frontend/ui/models/molecule/Particles/logic";
import { Color, Vector3 } from "three";

//* Main
//* ----------------------------------------------------------------------------
// Effect Builder
export function addEffect(type, args) {
    // Logic
    // - declare options
    const options = {
        // - THREE.point
        color: addPointColorEffect,
        position: addPointPositionEffect,
        // - custom
        expansion: addExpansionEffect,
        flotation: addFlotationEffect,
        interpolation: addInterpolationEffect,
    };
    // - select option
    let option = options[type];
    // Update
    if (option)
        option(args);
}

//* ----------------------------------------------------------------------------
// THREE.point Effects
// - color
export function addPointColorEffect({ particles, i, final, colors }) {
    // Logic
    const chaoticValue = particles.data.chaotic[i];
    const target = new Color(1, 0, 0);
    // Transform
    final.lerp(target, chaoticValue);
    // Update
    colors.set(final.toArray(), i * 3);
}

// - position
export function addPointPositionEffect(args) {
    // Props
    const { animations: { interpolation } } = props;
    // Effects
    addEffect("interpolation", args);
    addEffect("flotation", args);
    if (args.time >= interpolation.duration)
        addEffect("expansion", args);
}

//* ----------------------------------------------------------------------------
// Custom Effects
// - expansion
export function addExpansionEffect({ object, i, final }) {
    // Props
    const { expansion } = props.animations;
    const chaosValue = object.data.chaotic[i];
    const { ideal } = object.data.positions;
    const positions = object.geometry.attributes.position.array;
    // Logic
    const source = new Vector3().fromArray(positions, i * 3);
    const target = new Vector3().fromArray(ideal, i * 3);
    const effect = new Vector3().subVectors(source, target);
    effect.multiplyScalar(chaosValue);
    effect.multiplyScalar(expansion.magnitude);
    // Add Effect
    final.add(effect);
}

// - flotation
export function addFlotationEffect({ object, i, final, time }) {
    // Props
    const { offsets } = object.data.positions;
    const { animations: { flotation } } = props;
    // Logic
    const vector = new Vector3().fromArray(offsets, i * 3);
    vector.addScalar(time * flotation.speed);
    const effect = new Vector3(
        Math.sin(vector.x),
        Math.sin(vector.y)
    );
    effect.multiplyScalar(flotation.magnitude);
    // Prepare for Update
    final.add(effect);
}

// - interpolation
export function addInterpolationEffect(args) {
    // Args
    const { time, object, i, final } = args;
    // Props
    const { ideal, initial } = object.data.positions;
    const { interpolation: { duration } } = props.animations;
    // Logic
    const source = new Vector3().fromArray(initial, i * 3);
    const target = new Vector3().fromArray(ideal, i * 3);
    // - ease timeease
    const easedTime = ease(time, duration);
    // - interpolate
    source.multiplyScalar(1 - easedTime);
    target.multiplyScalar(easedTime);
    // Add Effect
    final.add(source);
    final.add(target);
}