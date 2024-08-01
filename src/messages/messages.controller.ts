import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
@Controller('messages')
export class MessagesController {
  @Get()
  ListMessages() {}

  @Post()
  createMessages(@Body() Body: CreateMessageDto) {
    console.log(Body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
