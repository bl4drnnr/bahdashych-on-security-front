export interface LogoutResponse {
  status: 'logout'
}

export interface LogoutPayload {
  accessToken: string | null
}
