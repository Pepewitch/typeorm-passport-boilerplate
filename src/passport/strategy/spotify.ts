import { Strategy } from 'passport-spotify';

export const spotify_scope = ['user-read-email', 'user-read-private'];

const spotify = new Strategy(
  {
    clientID: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    callbackURL: `${process.env.BASE_URL}:${
      process.env.PORT
    }/login/spotify/callback`,
  },
  async (accessToken, refreshToken, expires_in, profile, done) => {
    console.log({ accessToken, refreshToken, expires_in, profile });
    done(null, profile.id);
  },
);

export default spotify;
