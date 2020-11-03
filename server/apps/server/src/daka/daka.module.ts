import { Module } from '@nestjs/common';
import { DakaController } from './daka.controller';

@Module({
  controllers: [DakaController]
})
export class DakaModule {}
