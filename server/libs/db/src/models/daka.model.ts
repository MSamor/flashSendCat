import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Daka{
    @ApiProperty({ description:'姓名' })
    @prop()
    name:string

    @ApiProperty({ description:'打卡' })
    @prop()
    daka:number
}