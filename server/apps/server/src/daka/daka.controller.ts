import { Daka } from '@libs/db/models/daka.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model:Daka
})
@Controller('daka')
@ApiTags('打卡')
export class DakaController {
    constructor(@InjectModel(Daka) private readonly model){}
}
