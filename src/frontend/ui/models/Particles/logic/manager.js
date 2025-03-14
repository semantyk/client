import { ModelManager } from '@semantyk/frontend/ui/components/molecules/Model/logic/manager';
import { ResizeListener } from './listeners/resize';
import { CameraSetup } from '../components/atoms/Camera/logic/setup';
import { CircleUpdate } from '../components/atoms/Circle/logic/update';
import { MouseHandler, MouseListener, MouseUpdate } from '../components/atoms/Mouse';
import { PlaneSetup } from '../components/atoms/Plane/logic/setup';
import { RaycasterSetup, RaycasterUpdate } from '../components/atoms/Raycaster';
import { LineUpdate } from '../components/atoms/RayLine/logic/update';
import { ChaosEffect } from '../components/atoms/Particles/effects/chaos';
import { ColorEffect } from '../components/atoms/Particles/effects/color';
import { EntropyEffect } from '../components/atoms/Particles/effects/entropy';
import { PositionEffect } from '../components/atoms/Particles/effects/position';
import { ResizeHandler } from '../components/atoms/Particles/handlers/resize';
import { ParticlesSetup } from '../components/atoms/Particles/logic/setup';
import { ParticlesUpdate } from '../components/atoms/Particles/logic/update';

/**
 * Manager class for particle strategies using the Strategy pattern
 */
export class ParticlesManager extends ModelManager {
    static instance = new ParticlesManager();

    static effects = {
        chaos: new ChaosEffect(),
        color: new ColorEffect(),
        entropy: new EntropyEffect(),
        position: new PositionEffect()
    };

    static handlers = {
        mouseMove: new MouseHandler(),
        resize: new ResizeHandler()
    };

    static setups = {
        camera: new CameraSetup(),
        particles: new ParticlesSetup(),
        plane: new PlaneSetup(),
        raycaster: new RaycasterSetup()
    };

    static listeners = {
        mouse: new MouseListener(),
        resize: new ResizeListener()
    };

    static updates = {
        circle: new CircleUpdate(),
        line: new LineUpdate(),
        mouse: new MouseUpdate(),
        particles: new ParticlesUpdate(),
        raycaster: new RaycasterUpdate(),
    };

    static affect(item, ...args) {
        const collection = this.effects;
        return super.execute(collection, item, 'execute', ...args);
    }

    static handle(item, ...args) {
        const collection = this.handlers;
        return super.execute(collection, item, 'execute', ...args);
    }

    static setup(item, ...args) {
        const collection = this.setups;
        return super.execute(collection, item, 'execute', ...args);
    }

    static update(item, ...args) {
        const collection = this.updates;
        return super.execute(collection, item, 'execute', ...args);
    }

    static executeAll(member, ...args) {
        const collection = this.listeners;
        return super.executeAll(collection, member, ...args);
    }
}