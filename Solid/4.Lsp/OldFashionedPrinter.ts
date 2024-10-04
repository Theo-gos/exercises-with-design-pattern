import { Printer } from "./interfaces/Printer";

export class OldFashionedPrinter implements Printer {
    print(document: string): void {
        console.log(`OldFashionedPrinter is printing document: ${document}`);
    }
}
