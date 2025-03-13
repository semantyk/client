import { MouseListener } from '../../components/atoms/Mouse/logic/listener';
import { ResizeListener } from './resize';

/**
 * Manager class that handles all particle event listeners using the Strategy pattern
 */
export class ListenerManager {
    static instance = new ListenerManager();

    constructor() {
        this.strategies = {
            mouse: new MouseListener(),
            resize: new ResizeListener(),
        };
    }

    addEventListeners(args) {
        Object.values(this.strategies).forEach(strategy => {
            strategy.add(args);
        });
    }

    removeEventListeners(args) {
        Object.values(this.strategies).forEach(strategy => {
            strategy.remove(args);
        });
    }

    static addEventListeners(args) {
        return ListenerManager.instance.addEventListeners(args);
    }

    static removeEventListeners(args) {
        return ListenerManager.instance.removeEventListeners(args);
    }
}

export const { addEventListeners, removeEventListeners } = ListenerManager;