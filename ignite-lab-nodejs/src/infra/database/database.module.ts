import { RecipientsRepository } from '@application/repositories/recipients-repository';
import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaNotificationsRepository } from '@infra/database/prisma/repositories/prisma-notifications-repository';
import { PrismaRecipientsRepository } from '@infra/database/prisma/repositories/prisma-recipients-repository';

import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
    {
      provide: RecipientsRepository,
      useClass: PrismaRecipientsRepository,
    },
  ],
  exports: [NotificationsRepository, RecipientsRepository],
})
export class DatabaseModule {}
