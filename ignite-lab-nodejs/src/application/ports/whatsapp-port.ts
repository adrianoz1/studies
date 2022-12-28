export interface SendInput {
  to: string;
  name: string;
  content: string;
}

export abstract class WhatsAppPort {
  abstract send(input: SendInput): Promise<void>;
}
