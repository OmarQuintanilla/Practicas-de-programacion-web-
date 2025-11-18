import { Router } from 'express';
import { createSale, getSalesWithCustomer, getSalesReport } from '../controllers/sale.controller.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = Router();

// POST /api/sales (E3)
router.post('/', verifyToken, createSale);

// GET /api/sales (E4)
router.get('/', verifyToken, getSalesWithCustomer);

// GET /api/sales/report (E6)
router.get('/report', verifyToken, getSalesReport);

export default router;