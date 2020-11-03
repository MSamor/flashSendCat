import { ApiProperty } from "@nestjs/swagger";
import { prop } from "@typegoose/typegoose";

export class Announcement {
    @ApiProperty({ description:'公告' })
    @prop()
    announcement:string
}