import jwt from "jsonwebtoken"
// export const loggedMiddleware = (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1]
//   const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET")
//   const userId = decodedToken.userId   
// User.findOne({_id: userId}).then ((response)=>{
// if (response) {
//   req.auth= {
//     userId: userId,
//     userRole : response.role  
//   },next()}
//   else {
//     res.status(401).json("user doesn't exist")
//   } 
// })
// .catch ((error)=>{
// res.status(500).json({error: error.message})
// })
// }
export const loggedMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET")
    const userId = decodedToken.userId
    const userRole = decodedToken.userRole
    req.auth = {
      userId: userId,
      userRole: userRole,
    }
    next()
    
  } catch (error) {
    res.status(401).json({ error })
  }
}
export const updateMiddleware = (req, res, next) => {
    try {
      if(req.auth.userRole==="admin"){next()}
     else{ res.status(403).json({ error: "no access to this route" })}
    } catch (error) {
      res.status(401).json({ error: error.message })
    }
  }