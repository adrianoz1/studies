import { Recipient } from './recipient';

describe('Recipient', () => {
  it('should be able to create a recipient', () => {
    const recipient = new Recipient({
      email: 'contato@a2dev.com.br',
      name: 'adriano',
      phone: '+5555991312271',
    });

    expect(recipient).toBeTruthy();
  });
});
