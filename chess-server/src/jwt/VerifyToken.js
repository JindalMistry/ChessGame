import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  // Get token from the header
  const token = req.header("Authorization");

  // Check if token is present
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }
  try {
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(404).json({ message: "Token is not valid!" });
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

export default verifyToken;
