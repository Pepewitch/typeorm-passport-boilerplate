import { Router } from 'express';
import login from './login';

const router = Router();

router.use('/login', login);

router.get('/ping', (req, res) => {
  return res.status(200).send({ message: 'pong' });
});

router.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>views: ' + req.session.views + '</p>');
    res.write('<p>expires in: ' + req.session.cookie.maxAge / 1000 + 's</p>');
    res.end();
  } else {
    req.session.views = 1;
    res.end('welcome to the session demo. refresh!');
  }
});

export default router;
