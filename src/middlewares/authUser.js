const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
  try {
    if (!req.headers.authorization)
      throw new Error('No tienes permisos para realizar esta acción');

    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (!payload) {
      throw new Error('No tienes permisos para realizar esta acción');
    }

    req.body.email = payload.email;
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { isAuth };
