import { Router } from 'express';

const router = Router();

// TODO: add transaction routes
router.get('/', (req, res) => {
    return res.send('GET transacations');
})

export default router;