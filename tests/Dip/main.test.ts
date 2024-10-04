import { SendNotification } from "../../Solid/5.Dip/SendNotification";
import { EmailService } from "../../Solid/5.Dip/services/EmailService";
import { SMSService } from "../../Solid/5.Dip/services/SMSService";

describe('Notification', () => {
    let emailNotification: SendNotification;
    let smsNotification: SendNotification;
    let message: string;

    beforeEach(() => {
        emailNotification = new SendNotification(new EmailService);
        smsNotification = new SendNotification(new SMSService);
        message = "Hello, this is a notification!";
    });

    test('should send an email notification', () => {
        console.log = jest.fn();
        
        emailNotification.sendNotification(message);
        expect(console.log).toHaveBeenCalledWith(`Sending email with message: ${message}`);
        expect(console.log).toHaveBeenCalledTimes(1);
    }); 

    test('should send a sms notification', () => {
        console.log = jest.fn();
        
        smsNotification.sendNotification(message);
        expect(console.log).toHaveBeenCalledWith(`Sending sms with message: ${message}`);
        expect(console.log).toHaveBeenCalledTimes(1);
    }); 
});
