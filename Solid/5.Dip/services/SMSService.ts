import { NotificationService } from "../interfaces/NotificationService";

export class SMSService implements NotificationService {
    send(message: string): void {
        console.log(`Sending sms with message: ${message}`);
    }
}
