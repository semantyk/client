import { ListenerStrategy } from '../../../../logic/listeners/strategy';

export class MouseListener extends ListenerStrategy {
    add({ handleMouseMove }) {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleMouseMove);
    }

    remove({ handleMouseMove }) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleMouseMove);
    }
}