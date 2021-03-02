const Router = require('express').Router;

const router = Router();

// TODO: add users routes
router.get('/', (req, res) => {
    return res.send('GET users');
})

module.exports = router;