import { User } from '@libs/db/models/user.model';
import { Controller, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud/dist/crud.decorator';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model:User
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
    constructor(@InjectModel(User) private readonly model){}
}
