const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, getUserByEmail } = require('../models/User');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const hashedPassword = user[0].password;
    const match = await bcrypt.compare(password, hashedPassword);

    if (match) {
      const token = jwt.sign({ email: user[0].email, id: user[0].id },process.env.JWT_SECRET);
      res.status(200).json({ message: 'Usuario logueado correctamente', token });
    } else {
      throw new Error('Usuario o contraseña incorrectos');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const register = async (req, res) => {
  try {
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;

    const user = await createUser(req.body);
    if (!user) {
      throw new Error('Error en la creación del usuario');
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  login,
  register,
};
