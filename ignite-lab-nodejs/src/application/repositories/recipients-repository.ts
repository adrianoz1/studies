import { Recipient } from '../entities/recipient';

export abstract class RecipientsRepository {
  abstract create(notification: Recipient): Promise<void>;
  abstract findAll(): Promise<Recipient[]>;
}
