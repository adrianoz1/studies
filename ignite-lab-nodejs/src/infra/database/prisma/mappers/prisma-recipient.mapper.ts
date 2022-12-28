import { Recipient as RawRecipient } from '@prisma/client';
import { Recipient } from '@application/entities/recipient';

export class PrismaRecipientMapper {
  static toPrisma(recipient: Recipient) {
    return {
      id: recipient.id,
      name: recipient.name,
      email: recipient.email,
      phone: recipient.phone,
      createdAt: recipient.createdAt,
    };
  }

  static toDomain(raw: RawRecipient): Recipient {
    return new Recipient(
      {
        name: raw.name,
        email: raw.email ?? '',
        phone: raw.phone,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
