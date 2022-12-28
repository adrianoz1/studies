import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '../repositories/notifications-repository';
import { RecipientsRepository } from '../repositories/recipients-repository';

import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { Recipient } from '@application/entities/recipient';
import { WhatsAppPort } from '@application/ports/whatsapp-port';

interface SendNotificationRequest {
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class SendNotification {
  constructor(
    private notificationsRepository: NotificationsRepository,
    private recipientsRepository: RecipientsRepository,
    private whatsappPort: WhatsAppPort,
  ) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { content, category } = request;

    const recipients: Recipient[] = await this.recipientsRepository.findAll();

    const notifications: Notification[] = [];

    for (const recipient of recipients) {
      const notification = new Notification({
        recipientId: recipient.id,
        content: new Content(content),
        category,
      });

      await this.notificationsRepository.create(notification);
      notifications.push(notification);
      this.whatsappPort.send({
        name: recipient.name,
        content,
        to: recipient.phone,
      });
    }

    return { notifications };
  }
}
