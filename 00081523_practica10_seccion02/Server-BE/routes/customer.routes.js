import { Router } from 'express';
import { getCustomers, searchCustomerByCode } from '../controllers/customer.controller.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = Router();

// GET /api/customers (E2)
router.get('/', verifyToken, getCustomers);

// GET /api/customers/search?code=... (E5)
router.get('/search', verifyToken, searchCustomerByCode);

export default router;