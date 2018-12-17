import { Strategy } from 'passport-facebook';

export const facebook_scope = ['email'];

const facebook = new Strategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: `${process.env.BASE_URL}:${process.env.PORT}/login/facebook/callback`,
    profileFields: ['email', 'name' , 'gender' , 'displayName' , 'profileUrl'],
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log({ accessToken, refreshToken, profile });
    done(null, profile.id);
  },
);

export default facebook;
