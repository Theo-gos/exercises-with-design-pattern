/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

import { IShape } from "./shapes/interfaces/IShape";
import { Circle } from "./shapes/Circle";
import { Rectangle } from "./shapes/Rectangle";
import { Shape } from "./shapes/Shapes";
import { Square } from "./shapes/Square";
import { Triangle } from "./shapes/Triangle";
import { FullTime } from "./employees/Fulltime";
import { Intern } from "./employees/Intern";
import { PartTime } from "./employees/PartTime";
import { Freelancer } from "./employees/Freelancer";

/*=========== START PRACTICE 1 ===============*/
let shapes: IShape[] = [
    new Circle(5),
    new Rectangle(4, 5),
    new Triangle(3),
    new Square(4),
];
const shapesInstance = new Shape(shapes);
console.log(shapesInstance.calculateTotalArea());
/*=========== END PRACTICE 1 ===============*/



/*=========== START PRACTICE 2 ===============*/
const fullTimeEmployee = new FullTime("FullTimer Alice");
console.log(`${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.getSalary()}`);

const partTimeEmployee = new PartTime("PartTimer Jay");
console.log(`${partTimeEmployee.name}'s salary is ${partTimeEmployee.getSalary()}`);

const internEmployee = new Intern("Intern Bob");
console.log(`${internEmployee.name}'s salary is ${internEmployee.getSalary()}`);

const freelancer = new Freelancer("Freelancer Max", 30);
console.log(`${freelancer.name}'s salary with ${freelancer.workingTime} working hour is ${freelancer.getSalary()}`);
/*=========== END PRACTICE 2 ===============*/
