const jwt = require('jsonwebtoken')
const secret = process.env.secretKey
module.exports = {
    genrateToken:async(email,time)=>{
        let token = await jwt.sign(
            {
              email: email,
            },
            secret,{
              expiresIn:time
            }
           
          );
          console.log('token',token)
            return({token,expiresIn:time})
    }
}