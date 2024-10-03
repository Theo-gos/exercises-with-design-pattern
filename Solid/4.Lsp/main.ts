/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

import { Fax } from "./interfaces/Fax";
import { Printer } from "./interfaces/Printer";
import { Scanner } from "./interfaces/Scanner";

class OldFashionedPrinter implements Printer {
    print(document: string): void {
        console.log(`OldFashionedPrinter is printing document: ${document}`);
    }
}

class MultiFunctionPrinter implements Printer, Scanner, Fax { 
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

const oldPrinter = new OldFashionedPrinter();
oldPrinter.print("Document 1");

const newPrinter = new MultiFunctionPrinter(); 
newPrinter.print("Document 2");
newPrinter.scan("Document 3");
newPrinter.fax("Document 4"); 

