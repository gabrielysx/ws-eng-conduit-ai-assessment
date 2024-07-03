import { EntityRepository } from '@mikro-orm/mysql';
import { User } from './user.entity';

export class UserRepository extends EntityRepository<User> {
    async findAllWithArticles(): Promise<User[]> {
        return this.findAll({ populate: ['articles'] });
    }
}
