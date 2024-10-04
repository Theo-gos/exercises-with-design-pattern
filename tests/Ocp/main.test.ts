import { Freelancer } from "../../Solid/2.Ocp/employees/Freelancer";
import { FullTime } from "../../Solid/2.Ocp/employees/FullTime";
import { Intern } from "../../Solid/2.Ocp/employees/Intern";
import { PartTime } from "../../Solid/2.Ocp/employees/PartTime";
import { Circle } from "../../Solid/2.Ocp/shapes/Circle";
import { Rectangle } from "../../Solid/2.Ocp/shapes/Rectangle";
import { Shape } from "../../Solid/2.Ocp/shapes/Shapes";
import { Square } from "../../Solid/2.Ocp/shapes/Square";
import { Triangle } from "../../Solid/2.Ocp/shapes/Triangle";

describe('Shapes', () => {
    let circle: Circle;
    let rectangle: Rectangle;
    let square: Square;
    let triangle: Triangle;
    let shapes: Shape;

    beforeEach(() => {
        circle = new Circle(5);
        rectangle = new Rectangle(4, 5);
        square = new Square(4);
        triangle = new Triangle(3);

        shapes = new Shape([circle, rectangle, square, triangle]);
    });

    test('should return area of circle', () => {
        const area = circle.calculateArea();
        const expectedArea = Math.PI * Math.pow(circle.radius, 2);
        expect(Number.isNaN(area)).toBe(false);
        expect(area).toBeCloseTo(expectedArea, 5);
    });

    test('should return area of rectangle', () => {
        const area = rectangle.calculateArea();
        const expectedArea = rectangle.height * rectangle.width;
        expect(Number.isNaN(area)).toBe(false);
        expect(area).toBeCloseTo(expectedArea, 5);
    });

    test('should return area of square', () => {
        const area = square.calculateArea();
        const expectedArea = Math.pow(square.side, 2);
        expect(Number.isNaN(area)).toBe(false);
        expect(area).toBeCloseTo(expectedArea, 5);
    });

    test('should return area of triangle', () => {
        const area = triangle.calculateArea();
        const expectedArea = 0.5 * triangle.length * triangle.length;
        expect(Number.isNaN(area)).toBe(false);
        expect(area).toBeCloseTo(expectedArea, 5);
    });

    test('should return total area of all the shapes', () => {
        const totalArea = shapes.calculateTotalArea();
        const expectedTotalArea =
            circle.calculateArea()
            + rectangle.calculateArea()
            + square.calculateArea()
            + triangle.calculateArea();
        expect(Number.isNaN(totalArea)).toBe(false);
        expect(totalArea).toBeCloseTo(expectedTotalArea, 5);
    });
});

describe('Employees', () => {
    let fullTimer: FullTime;
    let partTimer: PartTime;
    let intern: Intern;
    let freelancer: Freelancer;

    beforeEach(() => {
        fullTimer = new FullTime("FullTimer Alice");
        partTimer = new PartTime("PartTimer Jay");
        intern = new Intern("Intern Bob");
        freelancer = new Freelancer("Freelancer Max", 30);
    });

    test('should return salary of fullTimer', () => {
        expect(Number.isNaN(fullTimer.getSalary())).toBe(false);
        expect(fullTimer.getSalary()).toBe(5000);
    });

    test('should return salary of partTimer', () => {
        expect(Number.isNaN(partTimer.getSalary())).toBe(false);
        expect(partTimer.getSalary()).toBe(3000);
    });

    test('should return salary of intern', () => {
        expect(Number.isNaN(intern.getSalary())).toBe(false);
        expect(intern.getSalary()).toBe(1000);
    });

    test('should return salary for 30 working hour of freelancer', () => {
        expect(Number.isNaN(freelancer.getSalary())).toBe(false);
        expect(freelancer.getSalary()).toBe(1200);
    });
});
