import { Module } from '@nestjs/common';
import { OrdernameController } from './ordername.controller';

@Module({
  controllers: [OrdernameController]
})
export class OrdernameModule {}
