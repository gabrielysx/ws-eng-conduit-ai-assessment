import { Module } from '@nestjs/common';
import { RosterController } from './roster.controller';
import { RosterService } from './roster.service';
import { UserModule } from '../user/user.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '../user/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [User] }),UserModule],
  controllers: [RosterController],
  providers: [RosterService],
})
export class RosterModule {}