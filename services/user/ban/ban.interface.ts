export interface BanResponse {
  status: 'ban'
}

export interface BanPayload {
  accessToken: string | null
  email: string;
  reason: string;
}
