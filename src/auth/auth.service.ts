import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
@Injectable({})
export class AuthService {
  signup() {
    return { msg: "I'm Signed Up" };
  }

  signin() {
    return { msg: "I'm Signed In" };
  }
}
