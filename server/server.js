import http from "http"
import app from "./app.js";
const server=http.createServer(app)
const PORT=5000

server.listen(PORT,()=>{
    console.log(`server running successfully`);
})