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
    execute(collection, key, args) {
        const item = collection[key];
        if (item) {
            return item.execute(args);
        }
    }

    // TODO: Add a method for `add` and `remove`

    // Event listener methods
    addAll(collectionName, args) {
        const collection = this[collectionName];
        Object.values(collection).forEach(item => {
            item.add(args);
        });
    }

    removeAll(collectionName, args) {
        const collection = this[collectionName];
        Object.values(collection).forEach(item => {
            item.remove(args);
        });
    }
}