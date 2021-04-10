const bcrypt = require('bcrypt');

exports.register = async(req, res) => {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(req.body.password, salt);

    // create an user object in mongo db
    const user = new User({
        mobile: req.body.mobile,
        email: req.body.email,
        name: req.body.name,
        password: hasPassword,
        status: req.body.status || 1
    });
    // Save User in the database
    try {
        const id = await User.create(user);
        user.id = id;
        delete user.password;
        res.send(user);
    }
    catch (err) {
        res.status(500).send(err);
    }
}