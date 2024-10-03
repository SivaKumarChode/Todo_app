import express, { urlencoded } from "express"
const app=express()

// data base connection
import dbconnect from "./config/db.js"

import methodOverride from "method-override"

// middlewares
app.use(express.json())
app.use(express.static("public"))
app.use(urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.set("view engine","ejs")

dbconnect()
// routers
import router from "./routers/todoRouters.js"
app.use("/todo",router)

export default app