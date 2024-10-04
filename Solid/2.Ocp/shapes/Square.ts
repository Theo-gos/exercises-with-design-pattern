import { IShape } from "./interfaces/IShape";

export class Square implements IShape {
    side: number;

    constructor(side: number) {
        this.side = side;
    }

    calculateArea(): number {
        return Math.pow(this.side, 2)
    }
}
