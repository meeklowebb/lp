import defaultArgs from "./defaultArgs"

export interface GridCfg {
    //args
    numberOfCel: number
    numberOfRow: number
    canvasW: number
    canvasH: number
    gridW: number
    gridH: number
    celW: number
    celH: number
    centerX: number
    centerY: number
    // flags
    isFrameOn: boolean
    isAxisOn: boolean
    isLinesOn: boolean
    isDynamicGridHW: boolean
    isGridOn: boolean
    // Canvas
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
}

export default class Grid {
    args: GridCfg;
    constructor(args: GridCfg = defaultArgs) {
        this.args = args;
    }

    render() {
        console.log('Grid Started');
        this.args.isFrameOn && this.drawFrame();
        this.args.isAxisOn && this.drawAxis();
        this.args.isGridOn && this.drawGrid();
    }

    drawGrid() {
        let { ctx, canvasW, canvasH } = this.args;
        ctx.beginPath();
        
        ctx.closePath();
    }

    drawFrame() {
        let { ctx, canvasW, canvasH } = this.args;
        ctx.beginPath();
        ctx.lineWidth = 20;
        ctx.moveTo(0, 0);
        ctx.lineTo(canvasW, 0);
        ctx.lineTo(canvasW, canvasH);
        ctx.lineTo(0, canvasH);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.closePath();
    }

    drawAxis() {
        let { ctx, canvasW, canvasH, centerX, centerY } = this.args;
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(canvasW, centerY);
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, canvasH);
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
    }

    drawGrid() {

    }
}