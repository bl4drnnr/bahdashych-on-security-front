import * as jwt from 'jsonwebtoken';

const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError)
      return { message: 'token-expired' }
    else if (e instanceof jwt.JsonWebTokenError)
      return { message: 'invalid-token' }
  }
};

export { verifyToken };
