import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import bcrypt from "bcrypt" 
import jwt from "jsonwebtoken"

import userRoutes from "./routes/user.routes.js"
import customerRoutes from "./routes/customer.routes.js" 
import saleRoutes from "./routes/sales.routes.js"
import verifyToken from "./middlewares/verifyToken.js"
import { pool } from "./database.js"

const app = express()
const PORT = 3000
const JWT_SECRET = "your_jwt_secret" // En producción, usar .env

app.use(cors())
app.use(express.json());
app.use(bodyParser.json())

app.post("/signin", async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "Email y contraseña son requeridos." });
    }

    try {
        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1 LIMIT 1",
            [email]
        )

        // 1. Verificar si el usuario existe
        if (result.rows.length === 0) {
            return res.status(401).json({ message: "Credenciales inválidas." });
        }
        
        const user = result.rows[0];

        // 2. Compara la contraseña (texto plano) con el hash almacenado [cite: 41, 42]
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
             return res.status(401).json({ message: "Credenciales inválidas." });
        }
        
        // 3. Genera el token si la contraseña es válida
        const token = jwt.sign(
            {
                id: user.id,
                name: user.name,
                email: user.email
            },
            JWT_SECRET,
            { expiresIn: '1h' }
        )
        res.status(200).json({ token })
    } catch (err) {
        res.status(500).json({ message: "Error en el servidor", error: err.message })
    }
})

app.get("/protected", verifyToken, (req, res) => {
    res.json({
        message: "¡Has accedido a la ruta protegida!",
        user: req.user,
    })
})

// Mover verifyToken al middleware de las rutas protegidas, no aquí
app.use("/", userRoutes)
app.use("/api/customers", customerRoutes); // Para E2 y E5
app.use("/api/sales", saleRoutes);         // Para E3, E4 y E6 

app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
)