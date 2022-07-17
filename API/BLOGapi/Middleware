const jwt = require('jsonwebtoken')

module.exports = (req, res, next)=> {
    const token = req.header('x-auth-token')
    if(!token){
        return res.json("Not working")
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        

        next()
    } catch (error) {
        console.log(error)
        res.status(400).json('Token is not valid')
    }
}
