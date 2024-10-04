import { Fax } from "./interfaces/Fax";
import { Printer } from "./interfaces/Printer";
import { Scanner } from "./interfaces/Scanner";

export class MultiFunctionPrinter implements Printer, Scanner, Fax { 
    print(document: string): void {
        console.log(`MultiFunctionPrinter is printing document: ${document}`);
    }

    scan(document: string): void {
        console.log(`MultiFunctionPrinter is scanning document: ${document}`);
    }

    fax(document: string): void {
        console.log(`MultiFunctionPrinter is faxing document: ${document}`);
    }
}
