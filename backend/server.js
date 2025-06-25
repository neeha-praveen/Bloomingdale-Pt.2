import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import productRouter from "./routes/productRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use('/api/product', productRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get("/",(request,response)=>{
    response.send("API working");
})

app.post('/api/cart/add', (req, res) => {
    res.json({ success: true, message: "Test direct /api/cart/add working" });
});


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})