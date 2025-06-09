import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import productRouter from "./routes/productRoute.js"

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

app.get("/",(request,response)=>{
    response.send("API working");
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})