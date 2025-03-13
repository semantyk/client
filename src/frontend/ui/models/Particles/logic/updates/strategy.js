/**
 * Base class for particle updates following the Strategy Pattern
 */
export class UpdateStrategy {
    /**
     * Apply the update
     * @param {Object} args - Update arguments
     * @throws {Error} Must be implemented by child classes
     */
    apply(args) {
        throw new Error('Update strategy must implement apply method');
    }
}