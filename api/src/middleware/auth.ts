import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";

// Secret key for generating and validating tokens
export const SECRET_KEY: Secret = "secret key";

// Middleware function to handle JWT verification

export function authJwt(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  jwt.verify(token as string, SECRET_KEY, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }
    // Attach the decoded token to the request object

    (req as any).userId = decoded.id;

    next();
  });
}
