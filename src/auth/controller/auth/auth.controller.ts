import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/service/auth/auth.service';
// import { Users } from '../user.entity';

@Controller('api/v1/auth/')
export class AuthController {
   constructor(private usersService: AuthService) { }
  
//    @UseGuards(AuthGuard('local'))
   @Post('login')
   async login(@Request() req, @Body() body) {
        console.log(body)
        return
      //   return this.usersService.adminLogin(req.user)
   }
}
