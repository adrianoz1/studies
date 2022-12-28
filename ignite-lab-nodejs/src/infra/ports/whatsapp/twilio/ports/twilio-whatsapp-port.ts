import { Injectable } from '@nestjs/common';
import { SendInput, WhatsAppPort } from '@application/ports/whatsapp-port';
import { TwilioService } from '../twilio.service';

@Injectable()
export class TwilioWhatsappPort implements WhatsAppPort {
  constructor(private twilio: TwilioService) {}

  async send({ to, content }: SendInput): Promise<void> {
    await this.twilio.client.messages.create({
      body: `Olá ${content}, conseguimos resolver o problema que você estava enfrentando?`,
      from: 'whatsapp:+13513007550',
      to: `whatsapp:${to}`,
    });
  }
}
