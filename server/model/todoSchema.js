import mongoose from "mongoose"
const todoSchema= new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    isComplate:{
        type:Boolean,
        default:false
    }
})

const Todo=mongoose.model("todoSchema",todoSchema)
export default Todo