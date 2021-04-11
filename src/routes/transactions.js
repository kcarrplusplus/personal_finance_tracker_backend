const Router = require('express').Router;
const db = require('../db/queries');
const router = Router();

// TODO: add transaction routes
router.get('/', db.getTransactions);

router.post('/', db.postTransaction);

module.exports = router;