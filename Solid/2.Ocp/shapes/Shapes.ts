import { IShape } from "./interfaces/IShape";

export class Shape {
    private shapes: IShape[];

    constructor(shapes: IShape[]) {
        this.shapes = shapes;
    }

    calculateTotalArea(): number {
        return this.shapes.reduce((total, shape) => total += shape.calculateArea(), 0);
    }
}
