import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { placeOrder, verifyOrder } from '../controllers/orderController.js'

const orderRouter = express.Router();

orderRouter.post('/place', authMiddleware, placeOrder);
orderRouter.post("/verify-payment", verifyOrder);

export default orderRouter;