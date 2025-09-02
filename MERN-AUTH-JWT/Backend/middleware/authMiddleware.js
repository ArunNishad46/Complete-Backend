const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try{ 
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.sendStatus(401);
  
    const token = authHeader.split(" ")[1];
  
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({message:'No token provided'});
      req.user = user;
      next();
    });
  }catch(error){
    res.status(500).json({message: error.message})
  }
};

module.exports = authMiddleware;
