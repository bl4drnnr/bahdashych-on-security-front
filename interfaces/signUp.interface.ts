import { ISignIn } from "./signIn.interface";

export interface ISignUp extends ISignIn {
  passwordRepeat: string;
  username: string;
}
