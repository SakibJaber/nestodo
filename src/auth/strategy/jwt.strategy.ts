import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'eoitoiertfgj',
    });
  }
  async validate(payload: any) {
    userId: payload.userId;
    firstName: payload.firstName;
    lastName: payload.lastName;
    email: payload.email;
    role: payload.role;
  }
}
