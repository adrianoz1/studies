import { RecipientProps } from '@application/entities/recipient';
import { Recipient } from '@application/entities/recipient';

type Override = Partial<RecipientProps>;

export function makeRecipient(override: Override = {}) {
  return new Recipient({
    name: 'recipient-test',
    email: 'recipient@teste.com',
    phone: 'phone@teste.com',
    createdAt: new Date(),
    ...override,
  });
}
