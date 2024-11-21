import { CashPayment } from "../../Solid/3.Lsp/CashPayment";
import { CreditCardPayment } from "../../Solid/3.Lsp/CreditCardPayment";
import { OnlinePaymentProcessor } from "../../Solid/3.Lsp/OnlinePaymentProcessor";
import { PayPalPayment } from "../../Solid/3.Lsp/PayPalPayment";

describe('Payment', () => {
    let onlinePaymentProcessor: OnlinePaymentProcessor;
    let creditCardPayment: CreditCardPayment;
    let payPalPayment: PayPalPayment;
    let cashPayment: CashPayment;
    let amount: number;

    beforeEach(() => {
        onlinePaymentProcessor = new OnlinePaymentProcessor();
        creditCardPayment = new CreditCardPayment();
        payPalPayment = new PayPalPayment();
        cashPayment = new CashPayment();
        amount = 100;
    });

    test('should process online payment normally', () => {
        console.log = jest.fn();

        onlinePaymentProcessor.processPayment(amount);
        expect(console.log).toHaveBeenCalledWith(`Processing payment of $${amount}`);
        expect(console.log).toHaveBeenCalledTimes(1);
    });
 
    test('should process credit card payment normally', () => {
        console.log = jest.fn();
        
        creditCardPayment.processPayment(amount);
        expect(console.log).toHaveBeenCalledWith(`Processing credit card payment of $${amount}`);
        expect(console.log).toHaveBeenCalledWith("Validating credit card details...");
        expect(console.log).toHaveBeenCalledWith("Charging the credit card...");
        expect(console.log).toHaveBeenCalledTimes(3);
    });

    test('should process paypal payment normally', () => {
        console.log = jest.fn();
        
        payPalPayment.processPayment(amount);
        expect(console.log).toHaveBeenCalledWith(`Processing PayPal payment of $${amount}`);
        expect(console.log).toHaveBeenCalledWith("Redirecting to PayPal...");
        expect(console.log).toHaveBeenCalledWith("Completing PayPal transaction...");
        expect(console.log).toHaveBeenCalledTimes(3);
    });

    test('should process cash payment normally', () => {
        console.log = jest.fn();
        
        cashPayment.handleCashPayment(amount);
        expect(console.log).toHaveBeenCalledWith(`Accepting cash payment of $${amount} in person.`);
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
