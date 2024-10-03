import { IEmployee } from "./interfaces/IEmployee";

export class FullTime implements IEmployee {
    constructor(public name: string) { }

    getSalary(): number {
        return 5000;
    }
}
