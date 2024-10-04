import { IEmployee } from "./interfaces/IEmployee";

export class PartTime implements IEmployee {
    constructor(public name: string) { }

    getSalary(): number {
        return 3000;
    }
}
