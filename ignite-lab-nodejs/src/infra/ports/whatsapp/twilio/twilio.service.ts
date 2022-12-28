import { Injectable } from '@nestjs/common';

import { Twilio } from 'twilio';

@Injectable()
export class TwilioService {
  client: Twilio;

  constructor() {
    this.client = new Twilio(
      process.env.TWILIO_ACCOUNT_SID || '',
      process.env.TWILIO_AUTH_TOKEN || '',
    );
  }
}
