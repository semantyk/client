import { ModelManager } from '@semantyk/frontend/ui/components/molecules/Model/logic/manager';
import { ChaosEffect } from '../components/atoms/Particles/effects/chaos';
import { ColorEffect } from '../components/atoms/Particles/effects/color';
import { EntropyEffect } from '../components/atoms/Particles/effects/entropy';
import { PositionEffect } from '../components/atoms/Particles/effects/position';
import { Camera, Circle, Mouse, Particles, Plane, Raycaster, RayLine } from '../components/atoms';
import ParticlesSystemLogic from '../components/molecules/ParticlesSystem/ParticlesSystem.logic';
import ParticlesLogic from '../components/atoms/Particles/Particles.logic';
/**
 * Manager class for particle strategies using the Strategy pattern
 */
export class ParticlesManager extends ModelManager {
    static logic = {
        camera: Camera.logic,
        circle: Circle.logic,
        mouse: Mouse.logic,
        plane: Plane.logic,
        particles: ParticlesLogic, // TODO: Improve this fix
        particlesSystem: ParticlesSystemLogic, // TODO: Improve this fix
        raycaster: Raycaster.logic,
        rayLine: RayLine.logic
    }

    static effects = {
        chaos: ChaosEffect,
        color: ColorEffect,
        entropy: EntropyEffect,
        position: PositionEffect
    };

    static handlers = {
        mouseMove: Mouse.logic
    };

    static listeners = {
        mouse: Mouse.logic,
        resize: ParticlesSystemLogic
    };

    static affect(item, ...args) {
        const collection = this.effects;
        return super.execute(collection, item, 'execute', ...args);
    }

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