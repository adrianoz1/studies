import { Injectable } from '@nestjs/common';
import { Recipient } from '@application/entities/recipient';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
import { PrismaRecipientMapper } from '@infra/database/prisma/mappers/prisma-recipient.mapper';
import { RecipientsRepository } from '@application/repositories/recipients-repository';

@Injectable()
export class PrismaRecipientsRepository implements RecipientsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Recipient[]> {
    const recipients = await this.prisma.recipient.findMany();

    return recipients.map(PrismaRecipientMapper.toDomain);
  }

  async create(recipient: Recipient): Promise<void> {
    const raw = PrismaRecipientMapper.toPrisma(recipient);

    await this.prisma.recipient.create({
      data: raw,
    });
  }
}
