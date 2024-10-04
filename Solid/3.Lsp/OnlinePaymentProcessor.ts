import { IOnlinePaymentProcessor } from "./interfaces/IOnlinePaymentProcessor";

export class OnlinePaymentProcessor implements IOnlinePaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount}`);
    }
}
