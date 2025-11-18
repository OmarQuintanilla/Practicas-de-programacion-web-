import { pool } from '../database.js';

// Función auxiliar para validar la existencia del cliente (Requisito Ejercicio 3)
const customerExists = async (id_customer) => {
    const result = await pool.query('SELECT id FROM customers WHERE id = $1', [id_customer]);
    return result.rows.length > 0;
};

// Ejercicio 3: Registrar una nueva venta (POST /api/sales)
export const createSale = async (req, res) => {
    const { amount, id_customer } = req.body;

    if (!amount || !id_customer) {
        return res.status(400).json({ message: "Monto y ID de cliente son requeridos." });
    }

    try {
        // Validar que id_customer exista en customers
        const exists = await customerExists(id_customer);
        if (!exists) {
            return res.status(404).json({ message: "El ID de cliente no existe." });
        }

        // Insertar en sales con amount, id_customer y created_at (NOW())
        const result = await pool.query(
            'INSERT INTO sales (amount, id_customer, created_at) VALUES ($1, $2, NOW()) RETURNING *',
            [amount, id_customer]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ message: "Error al registrar venta", error: err.message });
    }
};

// Ejercicio 4: Listar ventas con datos del cliente (GET /api/sales)
export const getSalesWithCustomer = async (req, res) => {
    // Consulta con JOIN: SELECT s.id, s.amount, s.created_at, c.name ...
    const query = `
        SELECT s.id, s.amount, s.created_at, c.name
        FROM sales s
        JOIN customers c ON s.id_customer = c.id
        ORDER BY s.created_at DESC;
    `;
    try {
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ message: "Error al listar ventas", error: err.message });
    }
};

// Ejercicio 6: Reporte de ventas por cliente (GET /api/sales/report)
export const getSalesReport = async (req, res) => {
    // Consulta con GROUP BY: SELECT c.name, SUM(s.amount) AS total_sales ...
    const query = `
        SELECT c.name, SUM(s.amount) AS total_sales
        FROM sales s
        JOIN customers c ON s.id_customer = c.id
        GROUP BY c.name
        ORDER BY total_sales DESC;
    `;
    try {
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ message: "Error al generar reporte de ventas", error: err.message });
    }
};