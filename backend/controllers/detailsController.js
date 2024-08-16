const User = require("../models/User.js");

const getAllTeachers = async(req,res)=>
    { 
    
       try {     
            const teachers = await User.find({role:"teacher"})
    
            res.status(200).json({success:true, message:'Successfully added all', data:teachers})
    
        } catch (err) {
    
            res.status(404).json({success:false, message:'not found. Try again'})
        }
    }

const getAllStudents = async(req,res)=>
    {
    
       try {     
            const students = await User.find({role:"student"})
    
            res.status(200).json({success:true, message:'Successfully added all', data:students})
    
        } catch (err) {
    
            res.status(404).json({success:false, message:'not found. Try again'})
        }
    }

const getAllUsers = async(req,res)=>
    {
    
       try {     
            const users = await User.find({});
    
            res.status(200).json({success:true, message:'Successfully added all', data:users})
            console.log(users);
    
        } catch (err) {
    
            res.status(404).json({success:false, message:'not found. Try again'})
            console.log("Not found");
        }
    }

module.exports = {getAllTeachers, getAllStudents, getAllUsers}