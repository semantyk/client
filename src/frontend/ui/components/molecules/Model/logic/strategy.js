/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # `strategy.js`
 * @organization: Semantyk
 * @project: Client
 *
 * @file: Base strategy class for UI model behaviors.
 *
 * @created: Mar 13, 2025
 * @modified: May 19, 2026
 *
 * @author: Semantyk Team
 * @maintainer: Daniel Bakas <https://id.danielbakas.com>
 *
 * @copyright: Semantyk © 2026. All rights reserved.
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

export class ModelStrategy {
    /**
     * Add the event listener
     * @param {Object} args - Event arguments
     * @throws {Error} Must be implemented by child classes
     */
    static add(args) {
        throw new Error('Strategy must implement add method');
    }

    /**
     * Handle the event
     * @param {Object} args - Event arguments
     * @throws {Error} Must be implemented by child classes
     */
    static handle(args) {
        throw new Error('Strategy must implement handle method');
    }

    /**
     * Execute the strategy
     * @param {Object} args - Strategy arguments
     * @throws {Error} Must be implemented by child classes
     */
    static execute(args) {
        throw new Error('Strategy must implement execute method');
    }

    /**
     * Remove the event listener
     * @param {Object} args - Event arguments
     * @throws {Error} Must be implemented by child classes
     */
    static remove(args) {
        throw new Error('Strategy must implement remove method');
    }
}