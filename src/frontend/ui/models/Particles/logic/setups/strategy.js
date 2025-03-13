/**
 * Base class for particle setups following the Strategy Pattern
 */
export class SetupStrategy {
    /**
     * Apply the setup
     * @param {Object} args - Setup arguments
     * @throws {Error} Must be implemented by child classes
     */
    apply(args) {
        throw new Error('Setup strategy must implement apply method');
    }
}