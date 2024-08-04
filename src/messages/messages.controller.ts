import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessageService) {}
  @Get()
  ListMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  async createMessages(@Body() body: CreateMessageDto) {
    console.log('here');
    const message = await this.messagesService.create(body.content);
    return message;
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
}
