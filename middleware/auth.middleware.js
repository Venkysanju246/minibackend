const jwt = require("jsonwebtoken")
const auth = (req, res, next) => {
    const token = req.headers.authorization
    try {
        if (token) {
            var decoded = jwt.verify(token, 'mobile');
            if (decoded) {
                req.body.userid = decoded.userid
               next()
            }
        } else {
            res.send({ msg: "Please Login First!" })
        } 
    } catch (error) {
        console.log(error.message)
    }
    
}

module.exports = auth