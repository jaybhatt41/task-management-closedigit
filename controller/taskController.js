const Task=require("../model/taskModel")


const createTask=async(req,res)=>{
    const{title,description,status}=req.body
    try {
        const newTask=new Task({title,description,status,user:req.user.id})
        await newTask.save()
        res.status(200).json({newTask,message:"Task is created"})
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllTasks=async(req,res)=>{
    try {
        const {status,sortBy}=req.query
        const filter={user:req.user.id}
        if(status)
        {
            filter.status=status
        }
       let sort={}
       if(sortBy === 'asc')
       {
         sort.createdAt=1
       }
       else
       {
        sort.createdAt=-1
       }

       const tasks=await Task.find(filter).sort(sort)
       res.json(tasks)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getByIdTask=async(req,res)=>{
    try {
        const task=await Task.findOne({_id:req.params.id,user:req.user.id})
        if(!task)
        {
            return res.status(404).json({message:"Task not found"})
            
        }
        res.json(task)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateTask=async(req,res)=>{
    try {
        const task=await Task.findOneAndUpdate({_id:req.params.id,user:req.user.id},
            req.body,
            {new:true}
        )
        if(!task)
        {
            return res.status(404).json({message:"Task not found"})
        }
        res.json({task,message:"Updated successfully"})

    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
}

const deleteTask=async(req,res)=>{
    try {
        const task=await Task.findOneAndDelete({_id:req.params.id,user:req.user.id})
        if(!task)
        {
            return res.status(404).json({message:"Task not found"})
        }
        res.status(200).json({messasge:"Task deleted successfully"})
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports={createTask,getAllTasks,getByIdTask,updateTask,deleteTask}