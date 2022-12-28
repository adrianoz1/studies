import { Recipient } from '@application/entities/recipient';
import { RecipientsRepository } from '@application/repositories/recipients-repository';

export class InMemoryRecipientsRepository implements RecipientsRepository {
  public recipients: Recipient[] = [];

  async findAll(): Promise<Recipient[]> {
    return this.recipients;
  }

  async create(recipient: Recipient) {
    this.recipients.push(recipient);
  }
}
