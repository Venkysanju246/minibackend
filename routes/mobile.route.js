const MobileModel = require("../model/mdel")
const express = require("express")
const jwt = require("jsonwebtoken")
const mobilerouter = express.Router()
const auth = require("../middleware/auth.middleware")


mobilerouter.post("/add",auth, (req, res)=>{
    let mobileAdd = new MobileModel(req.body)
    mobileAdd.save()
      res.send({
        msg:"Mobile added suceesfully"
      })
})
mobilerouter.get("/all",auth, async(req, res)=>{
  try {
    const token = req.headers.authorization
    var decoded = jwt.verify(token, 'mobile');
    console.log(decoded)
  
      let mobileGet = await MobileModel.find({"userid":decoded.userid})
        res.send(mobileGet)
  } catch (error) {
    res.send(error)
  }
 
})
mobilerouter.patch("/update/:id", async(req, res)=>{
   const id = req.params.id
   let payLoad = req.body
   await MobileModel.findByIdAndUpdate({_id:id}, payLoad)
   res.send(payLoad, "has been updated succesfully")
})
mobilerouter.delete("/delete/:id", async(req, res)=>{
    const id = req.params.id
    await MobileModel.findByIdAndDelete({_id:id})
    res.send("Mobile has been deleted succesfully")
 })

module.exports = mobilerouter