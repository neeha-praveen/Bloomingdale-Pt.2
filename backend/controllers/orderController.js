import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
//import Razorpay from 'razorpay';
//import Stripe from "stripe";
//import crypto from "crypto";

// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// placing order from frontend
// const placeOrder = async (req, res) => {
//     const frontend_url = "http://localhost:5173"
//     try {
//         const newOrder = new orderModel({
//             userId: req.body.userId,
//             items: req.body.items,
//             amount: req.body.amount,
//             address: req.body.address
//         })
//         await newOrder.save();
//         await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
//         const deliveryCharge = 50; // ₹50 fixed delivery
//         const totalAmount = req.body.amount + deliveryCharge;
//         const amountInPaise = Math.round(totalAmount * 100);
//         const razorpayOrder = await razorpay.orders.create({
//             amount: amountInPaise,
//             currency: "INR",
//             receipt: newOrder._id.toString(),
//             payment_capture: 1
//         });
//         res.json({
//             success: true,
//             orderId: razorpayOrder.id,
//             amount: razorpayOrder.amount,
//             currency: razorpayOrder.currency,
//             orderRef: newOrder._id,
//         });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: 'error' });
//     }
// }

// const verifyPayment = async (req, res) => {
//     try {
//         const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;
//         // Step 1: Verify the signature
//         const generated_signature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//             .update(razorpay_order_id + "|" + razorpay_payment_id)
//             .digest("hex");
//         if (generated_signature !== razorpay_signature) {
//             return res.status(400).json({ success: false, message: "Payment verification failed" });
//         }
//         // Step 2: Update order status in DB
//         await orderModel.findByIdAndUpdate(orderId, {
//             paymentStatus: "Paid",
//             paymentId: razorpay_payment_id
//         });
//         res.json({ success: true, message: "Payment verified" });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// };

const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        // Fake immediate "success"
        const frontend_url = "http://localhost:5174";
        res.json({
            success: true,
            session_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'error' });
    }
};

const verifyOrder = async (req,res) => {
    const {orderId,success} = req.body;
    try {
        if(success=="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true, message:'payment done'});
        }
        else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false, message:'payment not done'});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:'error'});
    }
}

// user's orders for frontend
const userOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({userId:req.body.userId})
        res.json({success:true, data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:'error'});
    }
}

// listing orders for admin panel
const listOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:'error'});
    }
}

//updating order status by admin
const updateStatus = async (req,res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:'status updated'});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:'error'});
    }
}

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus }