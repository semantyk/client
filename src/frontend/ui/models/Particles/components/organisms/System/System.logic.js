/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `System.logic.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Logic for the Particles system organism.
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

import { ParticlesManager } from "../../../Particles.logic";
import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";

export default class ParticlesSystemLogic extends ModelStrategy {
    static setup(args) {
        ParticlesManager.setup('camera', args);
        ParticlesManager.setup('particles', args);
        ParticlesManager.setup('plane', args);
        ParticlesManager.setup('raycaster', args);
    }
}