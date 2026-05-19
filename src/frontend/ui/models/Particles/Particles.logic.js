/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `Particles.logic.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Particles model manager wiring atom and molecule logic strategies.
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

import { ModelManager } from '@semantyk/frontend/ui/components/molecules/Model/logic/manager';
import { Camera, Circle, Mouse, Plane, Raycaster, RayLine } from './components/atoms';
import ParticlesLogic from './components/molecules/Particles/Particles.logic';

//* Main
export class ParticlesManager extends ModelManager {
    static logic = {
        camera: Camera.logic,
        circle: Circle.logic,
        mouse: Mouse.logic,
        plane: Plane.logic,
        particles: ParticlesLogic, // TODO: Improve this fix
        raycaster: Raycaster.logic,
        rayLine: RayLine.logic
    }

    static handlers = {
        mouseMove: Mouse.logic
    };

    static listeners = {
        mouse: Mouse.logic
    };

    static handle(item, ...args) {
        const collection = this.handlers;
        return super.execute(collection, item, 'handle', ...args);
    }

    static setup(item, ...args) {
        const collection = this.logic;
        return super.execute(collection, item, 'setup', ...args);
    }

    static update(item, ...args) {
        const collection = this.logic;
        return super.execute(collection, item, 'update', ...args);
    }

    static addAll(...args) {
        const collection = this.listeners;
        return super.executeAll(collection, "add", ...args);
    }

    static removeAll(...args) {
        const collection = this.listeners;
        return super.executeAll(collection, "remove", ...args);
    }
}