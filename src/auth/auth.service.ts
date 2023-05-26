import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
// import { User, Bookmark } from '@prisma/client';
@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(dto: AuthDto) {
    return {
      email: dto.email,
      password: dto.password,
    };
  }

  signin() {
    return { msg: "I'm Signed In" };
  }
}
