import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";

export class Order {
    @ApiProperty({ description:'货物id' })
    @prop()
    HwId:string

    @ApiProperty({ description:'_openid' })
    @prop()
    _openid:string

    @ApiProperty({ description:'地址' })
    @prop()
    address:string

    @ApiProperty({ description:'备注' })
    @prop()
    desc:string

    @ApiProperty({ description:'数量' })
    @prop()
    num:number

    @ApiProperty({ description:'微信用户开放id' })
    @prop()
    openId:string

    @ApiProperty({ description:'订单号' })
    @prop()
    orderId:string

    @ApiProperty({ description:'电话号' })
    @prop()
    phoneNum:string

    @ApiProperty({ description:'价格' })
    @prop()
    price:string

    @ApiProperty({ description:'产品id' })
    @prop()
    productId:number

    @ApiProperty({ description:'代取名称' })
    @prop()
    productName:string

    @ApiProperty({ description:'商家电话' })
    @prop()
    sellNum:string

    @ApiProperty({ description:'时间' })
    @prop()
    time:number

    @ApiProperty({ description:'状态码' })
    @prop()
    state:string

    @ApiProperty({ description:'校园服务' })
    @prop()
    type:string

    @ApiProperty({ description:'绿钩' })
    @prop()
    expressGet:string

    @ApiProperty({ description:'姓名' })
    @prop()
    userName:string
}