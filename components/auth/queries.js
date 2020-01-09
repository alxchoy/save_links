const { Pool } = require('pg');

const pool = new Pool();

function getUsers() {
  return pool.query('SELECT * FROM users');
};

function getUserByEmail(email) {
  return pool.query('SELECT * FROM users WHERE email = $1', [email]);
}

function createUser(data) {
  return pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', data);
};

module.exports = {
  getUsers,
  getUserByEmail,
  createUser
};