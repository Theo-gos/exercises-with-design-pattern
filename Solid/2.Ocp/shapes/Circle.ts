import { IShape } from "./interfaces/IShape";

export class Circle implements IShape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
