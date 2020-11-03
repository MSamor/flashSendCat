import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DakaModule } from './daka/daka.module';

@Module({
  imports: [DakaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
