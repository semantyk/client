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
export class ParticlesModelManager extends ModelManager {
    static instance = new ParticlesModelManager();

    static execute(type, method, ...args) {
        return this.instance[type](method, ...args);
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
            mouse: new MouseHandler(),
            resize: new ResizeHandler()
        };

        this.setups = {
            camera: new CameraSetup(),
            particles: new ParticlesSetup(),
            plane: new PlaneSetup(),
            raycaster: new RaycasterSetup()
        };

        this.listeners = {
            mouse: new MouseListener(),
            resize: new ResizeListener()
        };

        this.updates = {
            objects: {
                circle: new CircleUpdate(),
                line: new LineUpdate(),
                mouse: new MouseUpdate(),
                particles: new ParticlesUpdate(),
                raycaster: new RaycasterUpdate(),
            },
            attributes: {
                color: this.effects.color,
                position: this.effects.position
            }
        };
    }

    // Instance methods
    addEffect(type, args) {
        return this.execute(this.effects, type, args);
    }

    handleEvent(type, event, args) {
        return this.execute(this.handlers, type, { event, ...args });
    }

    setupObject(type, args) {
        return this.execute(this.setups, type, args);
    }

    updateObject(type, args) {
        return this.execute(this.updates.objects, type, args);
    }

    updateAttribute(type, args) {
        return this.execute(this.updates.attributes, type, args);
    }
}