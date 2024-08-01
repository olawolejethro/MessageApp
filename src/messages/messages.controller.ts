import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  ListMessages() {}

  @Post()
  createMessages() {}

  @Get('/:id')
  getMessage() {}
}
