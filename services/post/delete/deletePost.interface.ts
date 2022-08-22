export interface DeletePostResponse {
  status: 'deleted'
}

export interface DeletePostPayload {
  id: string
  accessToken: string | null
}
