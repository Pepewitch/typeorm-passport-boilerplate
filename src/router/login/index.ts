import { Router } from 'express';
import passport from '../../passport';
import spotify_router from './spotify';
import facebook_router from './facebook';
import google_router from './google';

const router = Router();

router.use('/facebook', facebook_router);
router.use('/google', google_router);
router.use('/spotify', spotify_router);

router.get('/', (req, res) => {
  console.log({ user: req.user });
  return res.status(200).send(`
  ${
    req.user
      ? `
      <form action="/login/logout" method="POST">
      <button type="submit">Logout</button>
      </form>`
      : `<form action="/login" method="POST">
    <input name="username" placeholder="username" autocomplete="off">
    <input name="password" placeholder="password" autocomplete="off">
    <button type="submit">Submit</button>
    </form>
    <br>
    <form action="/login/facebook" method="GET">
    <button type="submit">Login with facebook</button>
    </form>
    <form action="/login/google" method="GET">
    <button type="submit">Login with google</button>
    </form>
    <form action="/login/spotify" method="GET">
    <button type="submit">Login with spotify</button>
    </form>`
  }
  `);
});

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logOut();
  }
  return res.sendStatus(200);
});

router.get('/user', (req, res) => {
  return res.status(200).send({ user: req.user, session: req.session });
});

router.post(
  '/',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    return res.redirect('/login/user');
  },
);

export default router;
