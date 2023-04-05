import { Module } from '@nestjs/common';
import { MessageGateway } from './message-event/message.gateway';



@Module({
  imports: [],
  controllers: [],
  providers: [MessageGateway],
})
export class AppModule {}
