const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
  createNew: async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await db.User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log(newUser);

    const payload = {
      user: newUser.id,
    };

    jwt.sign(
      payload,
      'secret',
      {
        expiresIn: '1h',
      },
      (err, token) => {
        if (err) console.error(err);

        res.json({ name, token });
      }
    );
  },
};
