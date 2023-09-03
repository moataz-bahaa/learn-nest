import { User as UserModel } from '@prisma/client';

export class User implements UserModel {
  id: number;
  name: string;
  email: string;
  hashedPassword: string;
  profileImageUrl: string;
}
