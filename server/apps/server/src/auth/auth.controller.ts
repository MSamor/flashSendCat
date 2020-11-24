import { User } from '@libs/db/models/user.model';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { from } from 'rxjs';
import { LoginDto } from './dto/login.dto';
import { registerDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt'
import { CurrentUser } from './current-user.decorator';

@Controller('auth')
@ApiTags('用户登录')
export class AuthController {

    constructor(
        private JwtService:JwtService,
        @InjectModel(User) private userModel:ReturnModelType<typeof User>
        ){}

    @Post('register')
    @ApiOperation({ summary:'注册' })
    async register(@Body() dto:registerDto){
        const { username , password , name , phone  } = dto
        const user = await this.userModel.create({
            username,
            password,
            name,
            phone,
        })
        return user;
    }

    @Post('login')
    @ApiOperation({ summary:'登录' })
    @UseGuards(AuthGuard('local'))
    async login(@Body() dto:LoginDto , @Req() req){
        return {
            token:this.JwtService.sign(String(req.user._id))
        };
    }

    @Get('user')
    @ApiOperation({ summary:'获取个人信息' })
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async user(@Req() req){
        return req.user
    }
}
