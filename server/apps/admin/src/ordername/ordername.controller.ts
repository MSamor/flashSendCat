import { OrderByName } from '@libs/db/models/orderbyname.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model:OrderByName
})
@Controller('ordername')
@ApiTags('完成订单')
export class OrdernameController {
    constructor(@InjectModel(OrderByName) private readonly model){}
}
