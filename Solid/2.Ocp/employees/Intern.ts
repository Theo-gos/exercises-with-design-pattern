import { IEmployee } from "./interfaces/IEmployee";

export class Intern implements IEmployee {
    constructor(public name: string) { }

    getSalary(): number {
        return 1000;
    }
}
