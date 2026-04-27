import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { API_BASE_URL } from "./../../../constants/api";
import {
  loginPyload,
  loginResponse,
  SignupPayload,
  verifyEmailPyload,
} from "@/types/auth/authTypes";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/auth` }),
  endpoints: (build) => ({
    signupUser: build.mutation<any, SignupPayload>({
      query: (payload) => ({
        url: "/signup",
        method: "POST",
        body: payload,
      }),
    }),
    loginUser: build.mutation<loginResponse, loginPyload>({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),
    verifyEmail: build.mutation<any, verifyEmailPyload>({
      query: (payload) => ({
        url: "/verify-email",
        method: "POST",
        body: payload,
      }),
    }),
    forgetPassword: build.mutation<any, any>({
      query: (payload) => ({
        url: "/forget-password",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});
