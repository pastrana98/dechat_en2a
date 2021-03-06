import { Notification } from './notification.model';

export class NewMessageNotification extends Notification {

    constructor(type: string, chatUri: string, messageUri: string) {
        super(type);
        this.chatUri = chatUri;
        this.messageUri = messageUri;
    }

    chatUri?: string;
    messageUri?: string;
}
