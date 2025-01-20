export interface IProfile {
  name: string;
  role: string;
  email: string;
}

export interface IUser {
  _id?: string;
  name: string;
  role: string;
  email: string;
  grade?: string;
  subject?: string;
}
