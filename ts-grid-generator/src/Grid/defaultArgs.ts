import type { GridCfg } from ".";

let canvas = document.createElement('canvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
document.body.appendChild(canvas);

const defaultArgs: GridCfg = {
    canvasH: canvas.height,
    canvasW: canvas.width,
    celH: 30,
    celW: 30,
    centerX: canvas.width / 2,
    centerY: canvas.height / 2,
    gridH: canvas.width / 2,
    gridW: canvas.height/ 2,
    isAxisOn: true,
    isDynamicGridHW: true,
    isFrameOn: true,
    isLinesOn: true,
    numberOfCel: 100,
    numberOfRow: 100,
    canvas, ctx,
};

export default defaultArgs;