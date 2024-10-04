export interface IOnlinePaymentProcessor {
    processPayment(amount: number): void;
}
