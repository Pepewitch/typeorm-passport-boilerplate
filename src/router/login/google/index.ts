import { Router } from 'express';
import passport from '../../../passport';
import { google_scope } from '../../../passport/strategy/google';

const router = Router();

router.get(
  '/',
  passport.authenticate('google', { scope: google_scope, session: false }),
);

router.get(
  '/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: false,
  }),
  (req, res) => {
    console.log(req.user);
    return res.redirect('/login/user');
  },
);

export default router;
