import { IToken } from "../interfaces/token.interface";

const parseJwt = (token: string): IToken => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export { parseJwt };
