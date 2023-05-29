import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

type Admin = {
    admin_id: number,
    name: string,
    email: string,
    level: number,
    password: string 
}

@Injectable()
export class AuthService {

    constructor(private jwt: JwtService){}

    async validateUser(email: string, password: string): Promise<any> {
       const testAdmin : Admin = {
        admin_id: 1,
        email: 'admin@example.com',
        password: 'pass',
        name: 'Admin',
        level: 1
       }

       if(password === testAdmin.password && email === testAdmin.email){
            const {password, ...result} = testAdmin
            return result
       }
       return null
   }

   async adminLogin(admin: Admin) {
       const payload = { 
        email: admin.email, 
        sub: admin.admin_id, 
        level: admin.level };

       return {
           access_token: this.jwt.sign(payload),
       };
   }
}
