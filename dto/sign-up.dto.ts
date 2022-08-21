import { SignInDto } from "./sign-in.dto";

export interface SignUpDto extends SignInDto {
  passwordRepeat: string;
  username: string;
  firstName?: string;
  lastName?: string;
}
