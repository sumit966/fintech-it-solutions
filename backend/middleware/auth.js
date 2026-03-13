import jwt from "jsonwebtoken";

export default (roles = []) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.status(401).json({ error: "No token" });

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ error: "Forbidden" });
      }

      req.user = decoded;
      next();
    } catch {
      res.status(401).json({ error: "Invalid token" });
    }
  };
};