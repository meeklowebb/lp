import type { GridCfg } from ".";

let canvas = document.createElement('canvas') as HTMLCanvasElement;
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
document.body.appendChild(canvas);

canvas.width = innerWidth;
canvas.height = innerHeight;

const defaultArgs: GridCfg = {
    canvasH: canvas.height,
    canvasW: canvas.width,
    celH: 30,
    celW: 30,
    centerX: canvas.width / 2,
    centerY: canvas.height / 2,
    gridH: canvas.width,
    gridW: canvas.height,
    isAxisOn: true,
    isDynamicGridHW: true,
    isFrameOn: true,
    isLinesOn: true,
    isGridOn: true,
    numberOfCel: 100,
    numberOfRow: 100,
    canvas, ctx,
};

export default defaultArgs;