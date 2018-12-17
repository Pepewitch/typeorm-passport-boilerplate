import Controller from '..';
import { User } from '../../entity/User';
import { AsyncErrorHandler } from '../../decorators/error-handler';

export default class UserController {
  @AsyncErrorHandler()
  public static async getUser(username: string) {
    const connection = await Controller.getConnection();
    const user = await connection.manager.findOne(User, { username });
    return user;
  }

  @AsyncErrorHandler()
  public static async getUsers(options?: Partial<User>) {
    const connection = await Controller.getConnection();
    const users = await connection.manager.find(User, { where: options });
    return users;
  }

  @AsyncErrorHandler()
  public static async addUser(options: User) {
    const connection = await Controller.getConnection();
    const user = new User();
    Object.assign(user, options);
    await connection.manager.save(user);
  }
}
