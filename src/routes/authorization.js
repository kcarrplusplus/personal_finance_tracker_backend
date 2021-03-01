import { Router } from 'express';

const router = Router();

// TODO: add authorization routes
router.post('/login', (req, res) => {
    return res.send('Login sample');
})

export default router;