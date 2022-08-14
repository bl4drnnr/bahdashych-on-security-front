import { ISignIn } from "./sign-in.interface";

export interface ISignUp extends ISignIn {
  passwordRepeat: string;
  username: string;
}
