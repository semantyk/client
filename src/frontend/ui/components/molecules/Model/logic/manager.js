/**
 * Base manager class for models using the Strategy pattern
 */
export class ModelManager {
    constructor() {
        if (this.constructor === ModelManager) {
            throw new Error('Abstract class ModelManager cannot be instantiated directly');
        }
    }

    // Generic method to handle operations on collections
    execute(collection, type, args) {
        const item = collection[type];
        if (item) {
            return item.execute(args);
        }
    }

    // Event listener methods
    addEventListeners(args) {
        Object.values(this.listeners).forEach(listener => {
            listener.add(args);
        });
    }

    removeEventListeners(args) {
        Object.values(this.listeners).forEach(listener => {
            listener.remove(args);
        });
    }

    // Static helper method that automatically uses the correct instance
    static execute(methodName, type, ...args) {
        const instance = this.instance;
        if (!instance) {
            throw new Error(`No instance found for ${this.name}. Make sure to initialize the static instance property.`);
        }

        switch (methodName) {
            case 'addEffect':
                return instance.addEffect(type, args[0]);
            case 'handleEvent':
                return instance.handleEvent(type, args[0], args[1]);
            case 'setupObject':
                return instance.setupObject(type, args[0]);
            case 'updateObject':
                return instance.updateObject(type, args[0]);
            case 'addEventListeners':
                return instance.addEventListeners(type);
            case 'removeEventListeners':
                return instance.removeEventListeners(type);
            default:
                throw new Error(`Unknown method ${methodName}`);
        }
    }
}