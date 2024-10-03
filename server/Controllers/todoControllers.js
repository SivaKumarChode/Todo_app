import Todo from "../model/todoSchema.js";

const registerTodo = async (req, res, next) => {
    const { todo } = req.body
    try {
        if (!todo)
         {
            return res.status(400).render("error")
        }
        const newTodo = new Todo({
            todo
        })
        await newTodo.save()
        return res.status(200).redirect("/todo")
    } catch (error) {
        return res.status(500).send({
            message: "internal server error",
            error
        })
    }
}


const getTodo = async (req, res, next) => {
    try {
        const todo = await Todo.find()
        
        return res.status(200).render("home",{todos:todo})
        // left side todo is (home.ejs- todos) ,right is (getTodo function- todo)
    } catch (error) {
        return res.status(500).send({
            message:"server error"
        })
    }
}


const SingeTodo = async (req, res, next) => {
    try {
       const todo= await Todo.findById(req.params.id)
        return res.status(200).render("update",{todo:todo})
         // left side todo is (update.ejs- todo) ,right is (singleTodo function- todo)
    } catch (error) {
        return res.status(500).send({
            message: "internal server error",
            error
        })
    }
}

const updateTodo = async (req, res, next) => {
    try {
        const { todo } = req.body
        await Todo.findByIdAndUpdate(req.params.id, { todo }, { new: true })
        return res.status(200).redirect("/todo")
    } catch (error) {
        return res.status(500).send({
            message: "internal server error",
            error
        })
    }
}

const updateStatus = async (req, res, next) => {
    try {
        const { isComplate } = req.body
        await Todo.findByIdAndUpdate(req.params.id, { isComplate })
        return res.status(200).redirect("/todo")
    } catch (error) {
        return res.status(500).send({
            message: "internal server error",
            error
        })
    }
}

const deleteTodo = async (req, res, next) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        return res.status(200).redirect("/todo")
    } catch (error) {
        return res.status(500).send({
            message: "internal server error",
            error
        })
    }
}

export default {
    registerTodo,
    getTodo,
    SingeTodo,
    updateTodo,
    updateStatus,
    deleteTodo,
}