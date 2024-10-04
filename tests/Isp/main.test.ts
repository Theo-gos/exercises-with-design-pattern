import { MultiFunctionPrinter } from "../../Solid/4.Lsp/MultiFunctionPrinter";
import { OldFashionedPrinter } from "../../Solid/4.Lsp/OldFashionedPrinter";

describe('Printer', () => {
    let oldPrinter: OldFashionedPrinter;
    let newPrinter: MultiFunctionPrinter;
    let document: string;

    beforeEach(() => {
        oldPrinter = new OldFashionedPrinter();
        newPrinter = new MultiFunctionPrinter();
        document = "Document";
    });

    test('oldPrinter should print document', () => {
        console.log = jest.fn();
        
        oldPrinter.print(document);
        expect(console.log).toHaveBeenCalledWith(`OldFashionedPrinter is printing document: ${document}`);
        expect(console.log).toHaveBeenCalledTimes(1);
    });

    test('newPrinter should print document', () => {
        console.log = jest.fn();
        
        newPrinter.print(document);
        expect(console.log).toHaveBeenCalledWith(`MultiFunctionPrinter is printing document: ${document}`);
        expect(console.log).toHaveBeenCalledTimes(1);
    });

    test('newPrinter should scan document', () => {
        console.log = jest.fn();
        
        newPrinter.scan(document);
        expect(console.log).toHaveBeenCalledWith(`MultiFunctionPrinter is scanning document: ${document}`);
        expect(console.log).toHaveBeenCalledTimes(1);
    });

    test('newPrinter should fax document', () => {
        console.log = jest.fn();
        
        newPrinter.fax(document);
        expect(console.log).toHaveBeenCalledWith(`MultiFunctionPrinter is faxing document: ${document}`);
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
