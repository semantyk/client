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

    static execute(method, item, ...args) {
        return this.instance[method](item, ...args);
    }

    static add(collectionName, item, args) {
        const collection = this.instance[collectionName];
        return this.instance.execute(collection, item, args);
    }

    static handle(item, args) {
        const collection = this.instance.handlers;
        return this.instance.execute(collection, item, args);
    }

    static setup(item, args) {
        const collection = this.instance.setups;
        return this.instance.execute(collection, item, args);
    }

    static update(item, args) {
        const collection = this.instance.updates;
        return this.instance.execute(collection, item, args);
    }

    constructor() {
        super();
        this.effects = {
            chaos: new ChaosEffect(),
            color: new ColorEffect(),
            entropy: new EntropyEffect(),
            position: new PositionEffect()
        };

        this.handlers = {
            mouseMove: new MouseHandler(),
            resize: new ResizeHandler()
        };

        this.setups = {
            camera: new CameraSetup(),
            particles: new ParticlesSetup(),
            plane: new PlaneSetup(),
            raycaster: new RaycasterSetup()
        };

        this.listener = {
            mouse: new MouseListener(),
            resize: new ResizeListener()
        };

        this.updates = {
            circle: new CircleUpdate(),
            line: new LineUpdate(),
            mouse: new MouseUpdate(),
            particles: new ParticlesUpdate(),
            raycaster: new RaycasterUpdate(),
        };
    }
}