import { UserService } from '@/services';

export class UserController {
  constructor(private userService: UserService) {}

  create(req, res) {
    const { name, email, password, age } = req.body;

    const createdUser = this.userService.create({ name, email, password, age });

    res.send(createdUser);
  }

  async list(req, res) {
    const users = await this.userService.list();

    res.send(users);
  }

  update(req, res) {
    const { id } = req.params;
    const { name, email, password, age } = req.body;

    const updatedUser = this.userService.update({ id, name, email, password, age });

    res.send(updatedUser);
  }

  delete(req, res) {
    const { id } = req.params;

    this.userService.delete({ id });

    res.send('DELETED');
  }
}
