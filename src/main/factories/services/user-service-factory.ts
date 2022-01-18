import { TypeORMUserRepository } from '@/repositories';
import { UserService } from '@/services';

export const makeUserService = () => {
  const userRepository = new TypeORMUserRepository();
  const userService = new UserService(userRepository);

  return userService;
};
