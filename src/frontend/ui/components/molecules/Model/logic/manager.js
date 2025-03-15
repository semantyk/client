/**
 * Base manager class for models using the Strategy pattern
 */
export class ModelManager {
    constructor() {
        if (this.constructor === ModelManager) {
            throw new Error('Abstract class ModelManager cannot be instantiated directly');
        }
    }

    static call(object, member, ...args) {
        if (!object) return;
        else object[member](...args);
    }

    static execute(collection, item, member, ...args) {
        const object = collection[item];
        if (!object) return;
        else this.call(object, member, ...args);
    }

    static executeAll(collection, member, ...args) {
        Object.values(collection).forEach(object => {
            this.call(object, member, ...args);
        });
    }
}