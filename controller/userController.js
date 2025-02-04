const User=require("../model/userModel")
const jwt=require("jsonwebtoken")

const register=async(req,res)=>{
    const {username,email,password}=req.body
    try {
        const existingUser=await User.findOne({email})
        if(existingUser)
        {
            return res.status(400).json({message:"User already exists"})
        }
        const newUser=new User({username,email,password})
        console.log(newUser);
        
        await newUser.save()

        res.status(201).json({message:"User Register Successfully"})
    } catch (error) {
        res.status(500).json(error)
    }
}

const login=async(req,res)=>{
    const{email,password}=req.body
    try {
        const user=await User.findOne({email})
        if(!user)
        {
            return res.status(400).json({message:"User Not Found"})
        }
        const isMatch=await user.comparePassword(password)
        if(!isMatch)
        {
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.json({token,message:"Login Successfully"})
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports={register,login}