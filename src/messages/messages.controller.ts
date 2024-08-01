import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessageService;
  @Get()
  ListMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessages(@Body() Body: CreateMessageDto) {
    return this.messagesService.create(Body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
