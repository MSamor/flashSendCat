import { DbModule } from '@libs/db';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { DakaModule } from './daka/daka.module';
import { OrdernameModule } from './ordername/ordername.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
    OrderModule,
    AuthModule,
    DakaModule,
    OrdernameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
