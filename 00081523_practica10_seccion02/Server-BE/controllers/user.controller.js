// controllers/user.controller.js
import { pool } from '../database.js'
import bcrypt from "bcrypt"; // Nuevo import para hashing

export const displayHome = (req, res) => {
  res.send('Bienvenido a la API de usuarios 🧪')
}

export const getUsers = async (req, res) => {
  const result = await pool.query('SELECT * FROM users')
  res.json(result.rows)
}

export const getUserById = async (req, res) => {
  const { id } = req.params
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
  res.json(result.rows[0])
}

export const createUser = async (req, res) => {
  const { name, email, password } = req.body
  
  try {
    // Implementar Hashing de la contraseña 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const result = await pool.query(
      // Usamos la contraseña hasheada
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, hashedPassword] 
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    res.status(500).json({ message: "Error al crear usuario", error: err.message });
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body
  const result = await pool.query(
    'UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *',
    [name, email, id]
  )
  res.json(result.rows[0])
}

export const deleteUser = async (req, res) => {
  const { id } = req.params
  await pool.query('DELETE FROM users WHERE id = $1', [id])
  res.json({ message: 'Usuario eliminado' })
}