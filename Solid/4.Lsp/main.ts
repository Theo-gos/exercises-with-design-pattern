/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

import { MultiFunctionPrinter } from "./MultiFunctionPrinter";
import { OldFashionedPrinter } from "./OldFashionedPrinter";

const oldPrinter = new OldFashionedPrinter();
oldPrinter.print("Document 1");

const newPrinter = new MultiFunctionPrinter(); 
newPrinter.print("Document 2");
newPrinter.scan("Document 3");
newPrinter.fax("Document 4"); 

