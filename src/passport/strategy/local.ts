import { Strategy } from 'passport-local';
import UserController from '../../controllers/User/UserController';

const local = new Strategy(async (username, password, done) => {
  try {
    const user = await UserController.getUser(username);
    if (!user) {
      return done(null, false, { message: 'Unknown User' });
    }
    if (user.password === password) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Invalid password' });
    }
  } catch (error) {
    return done(error, null);
  }
});

export default local;
