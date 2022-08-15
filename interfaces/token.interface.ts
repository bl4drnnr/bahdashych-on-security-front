interface IRole {
  value: string;
}

export interface IToken {
  userId: string;
  username: string;
  roles: IRole[];
  type: string;
}
