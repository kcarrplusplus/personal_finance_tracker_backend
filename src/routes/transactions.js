const Router = require('express').Router;
const db = require('../db/queries');
const router = Router();

// TODO: add transaction routes
router.get('/', (req, res) => {
    return res.send('GET transacations');
});

router.post('/', db.postTransaction);

module.exports = router;