/**
 * Base class for model strategies following the Strategy Pattern
 */
export class ModelStrategy {
    /**
     * Add the event listener
     * @param {Object} args - Event arguments
     * @throws {Error} Must be implemented by child classes
     */
    add(args) {
        throw new Error('Strategy must implement add method');
    }

    /**
     * Execute the strategy
     * @param {Object} args - Strategy arguments
     * @throws {Error} Must be implemented by child classes
     */
    execute(args) {
        throw new Error('Strategy must implement execute method');
    }

    /**
     * Remove the event listener
     * @param {Object} args - Event arguments
     * @throws {Error} Must be implemented by child classes
     */
    remove(args) {
        throw new Error('Strategy must implement remove method');
    }
}