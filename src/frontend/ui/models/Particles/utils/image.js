/**
 * Image utilities for Particles
 */

export function getImageData(args) {
    // Args
    const { data: { unit }, objects: { image } } = args;
    // Logic
    let { width, height } = image;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = unit;
    canvas.height = (height / width) * unit;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    // Return
    return context.getImageData(0, 0, canvas.width, canvas.height);
}