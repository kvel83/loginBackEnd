const pool = require('../utils/db');

const createUser = async(user) => {
  const query = 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING (email, rol, lenguage)';
  const { email, password, rol, lenguage} = user;
  try {
    const response = await pool.query(query, [email, password, rol, lenguage]);
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
}

const getUserByEmail = async(credentials) => {
  const query = 'SELECT * FROM usuarios WHERE email = $1';
  try {
    const response = await pool.query(query, [credentials]);
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports ={
  createUser,
  getUserByEmail
};
