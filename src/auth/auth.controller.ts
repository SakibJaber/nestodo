import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../user/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Req() req) {
    const user: User = req.user;
    console.log(user +"LOGIN");

    const payload = {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };
    console.log(payload+"Payload");

    return { token: this.jwtService.sign(payload) };
  }
}
