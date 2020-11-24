import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Order } from './models/order.model';
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '@nestjs/config';
import { Daka } from './models/daka.model';
import { OrderByName } from './models/orderbyname.model';

const models = TypegooseModule.forFeature([User,Order , Daka , OrderByName])

@Global()
@Module({
  imports:[
    ConfigModule.forRoot({
      isGlobal:true
    }),
    TypegooseModule.forRoot('mongodb://localhost/ssmdiyiban',{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false
    }),
    models,
    JwtModule.registerAsync({
      useFactory(){
        return {
          secret:process.env.SECERT
        }
      }
    }),
  ],
  
  providers: [DbService],
  exports: [DbService , models , JwtModule],
})
export class DbModule {

}
