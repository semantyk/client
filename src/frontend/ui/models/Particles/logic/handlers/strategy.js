/**
 * Base class for particle event handlers following the Strategy Pattern
 */
export class HandlerStrategy {
    /**
     * Handle the event
     * @param {Object} event - Event object
     * @param {Object} args - Additional arguments
     * @throws {Error} Must be implemented by child classes
     */
    handle(event, args) {
        throw new Error('Handler strategy must implement handle method');
    }
}