import { IShape } from "./interfaces/IShape";

export class Rectangle implements IShape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    calculateArea(): number {
        return this.height * this.width;
    }
}
