interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  'ban.reason': string;
}

export interface GetUsersResponse {
  count: number;
  rows: User[];
}

export interface GetUsersPayload {
  offset: number;
  limit: number;
  accessToken: string | null
}
