import defaultArgs from "./defaultArgs"

export interface GridCfg {
    //args
    numberOfCel: number
    numberOfRow: number
    canvasW    : number
    canvasH    : number
    gridW      : number
    gridH      : number
    celW       : number
    celH       : number
    centerX    : number
    centerY    : number
    // flags
    isFrameOn      : boolean
    isAxisOn       : boolean
    isLinesOn      : boolean
    isDynamicGridHW: boolean
    // Canvas
    canvas: HTMLCanvasElement
    ctx   : CanvasRenderingContext2D
}

export default class Grid {
    args: GridCfg;
    constructor(args: GridCfg = defaultArgs) {
        this.args = args;
    }

    render() {
        console.log('Grid Started'); 
    }

    drawFrame() {

    }

}