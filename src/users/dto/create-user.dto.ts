import { OmitType } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends OmitType(User, [
  'id',
  'hashedPassword',
  'profileImageUrl',
]) {
  @IsNumberString()
  password: string;
}
