import { Router } from 'express';
import passport from '../../../passport';
import { facebook_scope } from '../../../passport/strategy/facebook';

const router = Router();

router.get(
  '/',
  passport.authenticate('facebook', { scope: facebook_scope, session: false }),
);

router.get(
  '/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    session: false,
  }),
  (req, res) => {
    console.log(req.user);
    return res.redirect('/login/user');
  },
);

export default router;
