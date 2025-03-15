import { ModelStrategy } from "@semantyk/frontend/ui/components/molecules/Model/logic/strategy";
import { getImageData } from "../../../utils/image";
import { Float32BufferAttribute } from "three";
import { ParticlesManager } from "../../../logic/manager";

export default class ParticlesLogic extends ModelStrategy {
    handle({ event, ...args }) {
        const { particles } = args.refs;
        ParticlesManager.setup('camera', args);
        const { particle } = args.config;
        const ratio = window.innerWidth / window.innerHeight;
        const size = Math.min(Math.max(particle.size * ratio, 0), particle.size);
        particles.current.material.size = size;
    }

    setup({ config, data: { color, unit }, objects: { image }, refs }) {
        const { particle } = config;
        const particles = refs.particles.current;
        const { data } = getImageData({ data: { unit }, objects: { image } });

        particles.data = {
            count: 0,
            chaotic: [],
            colors: [],
            positions: { ideal: [], initial: [], offsets: [] },
        };

        const dimensions = {
            x: unit,
            y: (image.height / image.width) * unit,
            z: unit
        };

        for (let y = 0; y < dimensions.y; y += particle.density) {
            for (let x = 0; x < dimensions.x; x += particle.density) {
                const alpha = data[(x + y * dimensions.x) * 4 + 3];
                if (alpha > 128) {
                    particles.data.chaotic.push(0);
                    particles.data.colors.push(color.r, color.g, color.b);
                    particles.data.positions.ideal.push(
                        x - dimensions.x / 2,
                        -y + dimensions.y / 2,
                        -dimensions.z / 2);
                    particles.data.positions.initial.push(
                        (Math.random() - 0.5) * unit * 2,
                        (Math.random() - 0.5) * unit * 2,
                        (Math.random() - 0.5) * unit * 2
                    );
                    particles.data.positions.offsets.push(
                        Math.random() * Math.PI * 2,
                        Math.random() * Math.PI * 2,
                        Math.random() * Math.PI * 2,
                    );
                    particles.data.count++;
                }
            }
        }

        const colorsArray = particles.data.colors;
        const colorsValue = new Float32BufferAttribute(colorsArray, 3);
        particles.geometry.setAttribute("color", colorsValue);

        const positionsArray = particles.data.positions.ideal;
        const positionsValue = new Float32BufferAttribute(positionsArray, 3);
        particles.geometry.setAttribute("position", positionsValue);

        const ratio = window.innerWidth / window.innerHeight;
        const size = Math.min(Math.max(particle.size * ratio, 0), particle.size);
        particles.material.size = size;
    }

    update(args) {
        const intersects = args.objects.raycaster.intersectObject(args.refs.particles.current);
        const idxs = new Set(intersects.map(({ index }) => index));

        for (let i = 0; i < args.refs.particles.current.data.count; i++) {
            ParticlesManager.affect('color', { i, ...args });
            ParticlesManager.affect('position', { i, idxs, ...args });
        }

        args.refs.particles.current.geometry.attributes.color.needsUpdate = true;
        args.refs.particles.current.geometry.attributes.position.needsUpdate = true;
    }
}