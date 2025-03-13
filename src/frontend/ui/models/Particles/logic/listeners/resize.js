import { ListenerStrategy } from './strategy';

export class ResizeListener extends ListenerStrategy {
    add({ handleResize }) {
        window.addEventListener("resize", handleResize);
    }

    remove({ handleResize }) {
        window.removeEventListener("resize", handleResize);
    }
}