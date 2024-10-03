import { IShape } from "./interfaces/IShape";

export class Triangle implements IShape {
    length: number;

    constructor(length: number) {
        this.length = length;
    }

    calculateArea(): number {
        return 0.5 * this.length * this.length;
    }
}
