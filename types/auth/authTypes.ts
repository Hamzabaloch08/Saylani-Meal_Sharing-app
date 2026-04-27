export interface SignupPayload {
  name: string;
  email: string;
  password: string;
  phone: number;
}

export interface loginPyload {
  email: string;
  password: string;
}
export interface loginResponse {
  success:boolean;
  message:string;

}
