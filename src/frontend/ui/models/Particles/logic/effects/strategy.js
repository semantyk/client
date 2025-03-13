/**
 * Base class for particle effects following the Strategy Pattern
 */
export class EffectStrategy {
    /**
     * Apply the effect
     * @param {Object} args - Effect arguments
     * @throws {Error} Must be implemented by child classes
     */
    apply(args) {
        throw new Error('Effect strategy must implement apply method');
    }
}