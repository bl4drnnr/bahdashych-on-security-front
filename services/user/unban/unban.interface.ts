export interface UnbanUserResponse {
  status: 'unban'
}

export interface UnbanUserPayload {
  email: string;
  accessToken: string | null
}
