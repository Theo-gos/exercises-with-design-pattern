import { IOnlinePaymentProcessor } from "./interfaces/IOnlinePaymentProcessor";
import { CreditCardPayment } from "./CreditCardPayment";
import { PayPalPayment } from "./PayPalPayment";
import { CashPayment } from "./CashPayment";

/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */
function handleOnlinePayment(paymentProcessor: IOnlinePaymentProcessor, amount: number): void {
    paymentProcessor.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
handleOnlinePayment(creditCardPayment, 100); // Output: Processed payment successfully

const payPalPayment = new PayPalPayment();
handleOnlinePayment(payPalPayment, 200); // Output: Processed payment successfully

const cashPayment = new CashPayment();
cashPayment.handleCashPayment(50); // Output: Accepting cash payment in person.
