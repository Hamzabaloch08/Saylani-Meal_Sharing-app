import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { API_BASE_URL } from "./../../../constants/api";
import { SignupPayload } from "@/types/auth/authTypes";

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
  }),
});
