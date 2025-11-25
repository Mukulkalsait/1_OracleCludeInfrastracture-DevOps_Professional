// // IMP: # Stoping access for other routes.
// import jwt from "jsonwebtoken";
// import { Request, Response, NextFunction } from "express";
//
// interface AuthRequest extends Request {
//   user?: string;
// }
//
// const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   let token: string | undefined;
//
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
//         id: string;
//       };
//       req.user = decoded.id;
//       next();
//     } catch (error) {
//       res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   }
//
//   if (!token) {
//     res.status(401).json({ message: "Not authorized, no token" });
//   }
// };
//
// export default protect;

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
    };
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
