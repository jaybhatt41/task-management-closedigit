const jwt=require("jsonwebtoken")

const authentication=async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    console.log("Received token:", token);
    if(!token)
    {
        return res.status(401).json({message:"Access Denied"})
    }
    try {
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decode
        next()
    } catch (error) {
        res.status(400).json(error)
        
    }
}

module.exports=authentication