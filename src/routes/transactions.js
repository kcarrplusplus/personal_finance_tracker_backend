const Router = require('express').Router;

const router = Router();

// TODO: add transaction routes
router.get('/', (req, res) => {
    return res.send('GET transacations');
})

module.exports = router;