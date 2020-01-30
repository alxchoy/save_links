const { Pool } = require('pg')

const pool = new Pool()

function getUsers() {
  return pool.query('SELECT * FROM users')
}

function getUserByEmail(email) {
  return pool.query('SELECT * FROM users WHERE email = $1', [email])
}

function createUser(data) {
  return pool.query(
    'INSERT INTO users (name, email, password, created_at) VALUES ($1, $2, $3, $4) RETURNING *',
    data
  )
}

module.exports = {
  getUsers,
  getUserByEmail,
  createUser,
}
