import { ApiParam, ApiProperty } from '@nestjs/swagger'
import { arrayProp, prop, Ref } from '@typegoose/typegoose'
import { Order } from './order.model'
import { hashSync } from 'bcryptjs'

export class User {
    @ApiProperty({ description:'用户名' , example:'user1'})
    @prop()
    username:string

    @ApiProperty({ description:'密码' , example:'pass1' })
    @prop({
        select:false,
        get(val){
            return val
        },
        set(val){
            return val ? hashSync(val) : val
        }
    })
    password:string

    @ApiProperty({ description:'联系电话' })
    @prop()
    phone:number

    @ApiProperty({ description:'姓名' })
    @prop()
    name:string

}