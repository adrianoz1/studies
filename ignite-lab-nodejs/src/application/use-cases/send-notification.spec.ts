import { makeRecipient } from '@test/factories/recipient-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { InMemoryRecipientsRepository } from '../../../test/repositories/in-memory-recipients-repository';

import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const recipientsRepository = new InMemoryRecipientsRepository();

    const sendNotification = new SendNotification(
      notificationsRepository,
      recipientsRepository,
    );

    await recipientsRepository.create(makeRecipient());
    await recipientsRepository.create(makeRecipient());

    const { notifications } = await sendNotification.execute({
      category: 'social',
      content: 'THis is a notification',
    });

    expect(notificationsRepository.notifications.length).toBe(2);
    expect(notifications.length).toBe(2);
  });
});
