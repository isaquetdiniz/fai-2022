import { User } from '../entities';

export interface UserRepository {
  create(params: UserRepository.createParams): User;
  list(): Promise<User[]>;
  update(params: UserRepository.updateParams): User;
  delete(params: UserRepository.deleteParams): void;
}

export namespace UserRepository {
  export type createParams = Omit<User, 'id'>;

  export type listParams = null;

  export type updateParams = {
    id: User['id'];

    name?: User['name'];
    age?: User['age'];
    email?: User['email'];
    password?: User['password'];
  };

  export type deleteParams = {
    id: string;
  };
}
