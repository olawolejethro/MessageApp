import { MessageRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

export class MessageService {
  messagesRepo: MessageRepository;
  constructor() {
    // service is creating its own dependencies
    // DONT DO THIS ON REAL APPS
    this.messagesRepo = new MessageRepository();
  }
  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(content: string) {
    return this.messagesRepo.create(content);
  }
}

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }
