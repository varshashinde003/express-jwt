var jwt = require('jsonwebtoken');

module.exports = (req , res , next) => {
    const token = req.headers["authorization"] && req.headers["authorization"].split("Bearer ")[1];
    jwt.verify(token , process.env.APP_KEY , null , (error , decoded) => {
        if(error) {
            res.status(401).json({error: "Unauthenticated."});
        }
        else {
            req.user = decoded;
            next();
        }
    });
};