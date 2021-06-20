const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ err: "Token is expired" });
  }
  try {
    // jwt.verify(token, process.env.SECRET_TOKEN);
    jwt.verify(token, 'Drmhze6EPcv0fN_81Bj-nAq241aA1');
    next();
  } catch (err) {
    res.status(400).send({ err: "Invalid Token" });
  }
};

module.exports = auth;
