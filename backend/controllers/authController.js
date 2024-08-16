const User = require("../models/User.js")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const register = async(req,res)=>
{
    try {
        
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        })

        await newUser.save()

        res.status(200).json({success: true, message: "Successfully created"});

    } catch (error) {
        
        res.status(500).json({success: false, message: "Failed to create. Try again"})
    }
}


const login = async(req,res)=>
{
    const email = req.body.email
    try {
        const user = await User.findOne({email})
        // if user does not exist
        if (!user)
        {
            return res.status(401).json({success:false, message:'User not found'}) 
        }
        // if user exist check for password or compare
        // console.log(req.body.password, user.password)

        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        // If password incorrect 
        if(!checkCorrectPassword)
        {
            return res.status(401).json({success:false, message:'incorrect email or password'})
        }

        const {password, role, ...rest} = user._doc;
        console.log(user._doc.role)

        // create jwt token

        const token = jwt.sign(
            {id:user._id, role:user.role},
            process.env.JWT_SECRET_KEY,
            {expiresIn:"15d"}
        )

        // set token in the browser cookies and send the response to the client
         res.cookie('accessToken',token,{httpOnly:true, expires:token.expiresIn}).status(201).json({token, data:{... rest}, role})


    } catch (error) {
        // console.log(error)
        res.status(500).json({success: false, message:'Failed to login'})
    }
}


module.exports = {login, register}