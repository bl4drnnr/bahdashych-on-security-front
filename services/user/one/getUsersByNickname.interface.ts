interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  'ban.reason': string;
}

export interface GetUsersByNicknameResponse {
  count: number;
  rows: User[]
}

export interface GetUsersByNicknamePayload {
  searchQuery: string,
  accessToken: string | null
}
