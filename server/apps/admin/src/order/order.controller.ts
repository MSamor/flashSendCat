import { Order } from '@libs/db/models/order.model';
import { Body, Controller, Get, Header, HttpCode, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model:Order
})
@Controller('order')
@ApiTags('订单信息')
export class OrderController {
    constructor (@InjectModel(Order) private readonly model:ReturnModelType<typeof Order>){}
    @Post('/a')
    async AddNewData(@Body() body){
         const res = await this.model.update(body , { overwrite:true } , { upsert:true })
         console.log(res)
         return res
    }
}
