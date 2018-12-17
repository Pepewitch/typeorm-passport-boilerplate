import passport from 'passport';
import UserController from '../controllers/User/UserController';
import { User } from '../entity/User';
import local from './strategy/local';
import facebook from './strategy/facebook';
import google from './strategy/google';
import spotify from './strategy/spotify';

export enum AuthenticationType {
  local,
  facebook,
  google,
  spotify,
}

passport.serializeUser((user: User, done) => {
  console.log('serialize', user);
  done(null, user);
});

passport.deserializeUser(async (username: string, done) => {
  console.log('deserialize', username);
  try {
    const user = await UserController.getUser(username);
    console.log('get user', username, user);
    if (user) {
      done(null, user);
    } else {
      throw new Error('User does not exist');
    }
  } catch (err) {
    done(err, null);
  }
});

passport.use(local);
passport.use(facebook);
passport.use(google);
passport.use(spotify);

export default passport;
