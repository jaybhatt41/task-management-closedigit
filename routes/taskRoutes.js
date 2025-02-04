const express=require('express')
const {createTask,getAllTasks,getByIdTask,updateTask,deleteTask}=require("../controller/taskController")
const authentication=require("../middleware/authentication")

const router=express.Router()
router.use(authentication)
router.post("/tasks",createTask)
router.get("/tasks",getAllTasks)
router.get("/tasks/:id",getByIdTask)
router.put("/tasks/:id",updateTask)
router.delete("/tasks/:id",deleteTask)

module.exports=router

