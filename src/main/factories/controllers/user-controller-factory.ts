import { makeUserService } from '../services';

import { UserController } from '@/controllers';

export const makeUserController = () => {
  const userService = makeUserService();
  const userController = new UserController(userService);

  return userController;
};
