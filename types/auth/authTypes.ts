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

interface user {
  id: string;
  name: string;
  email: string;
  role: string;
  phone: string;
}

export interface loginResponse {
  success: boolean;
  message: string;
  token: string;
  user: user;
}

export interface verifyEmailPyload {
  email: string;
  otp: number;
}
