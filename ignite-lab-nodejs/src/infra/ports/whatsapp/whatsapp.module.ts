import { Module } from '@nestjs/common';
import { WhatsAppPort } from '@application/ports/whatsapp-port';
import { TwilioWhatsappPort } from './twilio/ports/twilio-whatsapp-port';
import { TwilioService } from './twilio/twilio.service';

@Module({
  providers: [
    TwilioService,
    {
      provide: WhatsAppPort,
      useClass: TwilioWhatsappPort,
    },
  ],
  exports: [WhatsAppPort],
})
export class WhatsAppModule {}
