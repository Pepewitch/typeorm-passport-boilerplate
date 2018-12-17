import { Strategy } from 'passport-google-oauth2';

export const google_scope = ['profile'];

const google = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.BASE_URL}:${
      process.env.PORT
    }/login/google/callback`,
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log({ accessToken, refreshToken, profile });
    done(null, profile.id);
  },
);

export default google;
