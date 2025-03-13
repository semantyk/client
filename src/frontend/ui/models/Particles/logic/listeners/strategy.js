/**
 * Base class for particle event listeners following the Strategy Pattern
 */
export class ListenerStrategy {
    /**
     * Add the event listener
     * @param {Object} args - Event arguments
     * @throws {Error} Must be implemented by child classes
     */
    add(args) {
        throw new Error('Listener strategy must implement add method');
    }

    /**
     * Remove the event listener
     * @param {Object} args - Event arguments
     * @throws {Error} Must be implemented by child classes
     */
    remove(args) {
        throw new Error('Listener strategy must implement remove method');
    }
}