import { UserRepository } from '@/data/repositories';
import { TypeormHelper } from '@/db/config';
import { User } from '@/db/models';

export class TypeORMUserRepository implements UserRepository {
  create() {
    return { id: 'as', name: 'Edgar', age: 19, email: 'edgar@marques.com', password: 'senha123' };
  }

  async list() {
    const users = await TypeormHelper.connection.getRepository(User).find({});
    console.log(users);

    return users;
  }

  update() {
    return { id: 'as', name: 'Edgar', age: 19, email: 'edgar@marques.com', password: 'senha123' };
  }

  delete() {
    console.log('bye bye');
  }
}
