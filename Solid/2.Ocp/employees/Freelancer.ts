import { IEmployee } from "./interfaces/IEmployee";

export class Freelancer implements IEmployee {
    constructor(public name: string, public workingTime: number) { }

    getSalary(): number {
        return this.workingTime * 40;
    }
}
