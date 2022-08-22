export interface SignUpResponse {
  email: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  username: string;
  firstName?: string;
  lastName?: string;
}
