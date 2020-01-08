const { Pool } = require('pg');

const pool = new Pool();

function getUsers() {
  return pool.query('SELECT * FROM users');
};

function createUser(data) {
  return pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', data);
};

module.exports = {
  getUsers,
  createUser
};