import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './domain/entity/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
  controllers: [],
  providers: [],
  exports: [],
})
export class UserModule {}
