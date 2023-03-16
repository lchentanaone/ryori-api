/* eslint-disable prettier/prettier */
import { Injectable, NotAcceptableException} from '@nestjs/common';
import { UserService } from '../entities/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<any> {
      const user = await this.userService.findOne({ "email":email });
      if (!user) return null;
      const passwordValid = await bcrypt.compare(password, user.password)
      if (!user) {
          throw new NotAcceptableException('could not find the user');
      }
      if (user && passwordValid) {
          return user;
      }
      return null;
  }

    async login(user: any) {
      const payload = { 
          userPayload : {
              id: user.user.id, 
              email: user.user.email, 
              password: user.user.password,
              name: user.user.name,
              lastName: user.user.lastName,
              created_at: user.user.created_at, 
          }
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }

    async create(data) {
        data.password = await bcrypt.hash(data.password, 10)
        const response = await this.userService.create(data);
        if (response) {
            const { password, ...result } = response;
            return result;
        }
    }

  decodeToken(token) : any {
    return this.jwtService.decode(token)
  }

}