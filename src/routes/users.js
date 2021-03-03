const Router = require('express').Router;
const db = require('../db/queries');

const router = Router();

// TODO: add users routes
router.get('/', db.getUsers)

module.exports = router;