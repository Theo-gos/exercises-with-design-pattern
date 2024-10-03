/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

import { SendNotification } from "./SendNotification";
import { EmailService } from "./services/EmailService";
import { SMSService } from "./services/SMSService";

const emailNotification = new SendNotification(new EmailService);
emailNotification.sendNotification("Hello, this is a notification!");

const smsNotification = new SendNotification(new SMSService);
smsNotification.sendNotification("Hello, this is a notification!");
