const express = require("express")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const userrouter = express.Router()
const UserModel = require("../model/user.model")

userrouter.post("/register",async (req, res)=>{
    let {username,email, password, location} = req.body
    let checkuser = await UserModel.findOne({email}) 
    console.log(checkuser)
    try {
        if(!checkuser){
            bcrypt.hash(password, 6, async function(err, hash) {
                let newUser = new UserModel({username, email, password:hash,location})
               await newUser.save()
               res.status(200).send({
                msg:"Registration succesfull"
               })
            });  
        }else{
            res.send({
                msg:"user already registered"
            })
        }
      
    } catch (error) {
        res.send(error.message)
    }
    
})

userrouter.post("/login", async(req, res)=>{
const {email, password} = req.body

let user = await UserModel.findOne({email})
//let userPass = await UserModel.find({password})
//console.log(user)

console.log(user._id)
// if(user.length==0){
//     res.send("Invalid username")
// }
if(user){
    bcrypt.compare(password, user.password, async function(err, result) {
        if(result){
            res.send({
                msg: "Login success",
                "token": jwt.sign({userid:user._id}, "mobile"),
                "username":user.username
            })
        }else{
            res.send({
                msg:"Password in Incorrect!!"
            })
        }
    }); 
}else{
    res.send("error")
}
})

userrouter.get("/", async (req, res)=>{
   let data = await UserModel.find()
   res.send(data)
})

module.exports = userrouter