const jwt = require("jsonwebtoken");
const JWT_SECRET = "PrinceI$AG00dB0y";

const fetchUser = (req, res, next) => {
  //"next" means middleware indicate towards the next function which is async (req, res) => {} in auth.js
  //Getting the user from JwtToken then extracting the userId and add it to request(req) object
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "Please Authenticate using valid Token!" });
  }
  try {
    const Data = jwt.verify(token, JWT_SECRET);
    req.user = Data.user;   //data is a object
  } catch (error) {
    return res
      .status(401)
      .send({ error: "Please Authenticate using valid Token!" });
  }
  next();
};

module.exports = fetchUser;
