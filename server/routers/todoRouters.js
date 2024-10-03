import todoControllers from "../Controllers/todoControllers.js"
import express from "express"
import { Router } from "express"

const router=Router()

router.post("/",todoControllers.registerTodo)
router.get("/",todoControllers.getTodo)
router.get("/:id",todoControllers.SingeTodo)
router.patch("/:id",todoControllers.updateTodo)
router.patch("/status/:id",todoControllers.updateStatus)
router.delete("/:id",todoControllers.deleteTodo)

export default router
