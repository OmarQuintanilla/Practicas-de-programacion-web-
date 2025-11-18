import { pool } from '../database.js';

// Ejercicio 2: Listado básico de clientes (GET /api/customers)
export const getCustomers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM customers');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ message: "Error al listar clientes", error: err.message });
    }
};

// Ejercicio 5: Buscar clientes por código (GET /api/customers/search?code=XYZ)
export const searchCustomerByCode = async (req, res) => {
    // El código se lee de los query parameters
    const { code } = req.query; 

    if (!code) {
        return res.status(400).json({ message: "El parámetro 'code' es requerido." });
    }
    try {
        // Consulta: SELECT * FROM customers WHERE code = $1
        const result = await pool.query('SELECT * FROM customers WHERE code = $1', [code]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ message: "Error al buscar cliente por código", error: err.message });
    }
};