import { Router } from 'express';

const router = Router();

// TODO: add users routes
router.get('/', (req, res) => {
    return res.send('GET users');
})

export default router;