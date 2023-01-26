import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../middleware/auth";

export async function auth(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await verifyUserCredentials(email, password);
      if (user) {
        const token = jwt.sign({ id: user.id }, SECRET_KEY, {
          expiresIn: "1h",
        });
        res.status(200).json({ message: "Authentication successful", token });
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(400).json({ message: "Email and password are required" });
  }
}

async function verifyUserCredentials(
  email: string,
  password: string
): Promise<any> {
  // Dummy email and password for demonstration purposes
  const dummyEmail = "test@example.com";
  const dummyPassword = "password";

  if (email === dummyEmail && password === dummyPassword) {
    return { userId: 1 };
  } else {
    return null;
  }
}
