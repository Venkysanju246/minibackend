const express = require("express")
const app = express()
app.use(express.json())
const connectinTodb = require("./connection/db")
const mobilerouter = require("./routes/mobile.route")
const userrouter = require("./routes/user.route")
const cors = require("cors")
app.use(cors())
app.use("/user", userrouter)
// app.use(auth)
app.use("/mobile", mobilerouter)

app.listen(8080, async()=>{
    try {
        await connectinTodb
        console.log("connected to data base")
        console.log("server started running")
    } catch (error) {
        console.log(error.message)
    }
   
})
