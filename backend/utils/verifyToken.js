const jwt =require('jsonwebtoken'); 
const verifyToken = (req,res,next)=>
{
    // console.log(req.cookies.accessToken)
    const token = req.cookies.accessToken;
    console.log(token,"token in verifyToken");
    if (!token)
    {
        return res.status(401).json({success:false,message:'You are not authorize'})
    }

    // if token exist verify token 
    jwt.verify(token, process.env.JWT_SECRET_KEY,(err,user)=>
    {
        if (err)
        {
            console.log("Not verified...");
            return res.status(401).json({success:false, message:'Token is invalid'})
        }

        req.user = user
        console.log("Verified...");
        next() 
    })

}

const verifyAdmin = (req,res,next)=>
    {
        verifyToken(req,res,next,()=>
        {
            if (req.user.role === "admin")
            {
                next();
            }
            else
            {
               return res.status(401).json({success:false,message:'You are not authorize'})
            }
        })
    };

module.exports = {verifyAdmin}
