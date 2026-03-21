import { axiosInstance } from "../axiosInstance";
import { API_CONFIG } from "../api.constants";
import { User, LoginRequest, RegisterRequest } from "../api.types";

export const authApi = {
  login: async (data: LoginRequest): Promise<User> => {
    const response = await axiosInstance.post(API_CONFIG.LOGIN_ENDPOINT, data);
    return response.data.user;
  },

  register: async (data: RegisterRequest): Promise<User> => {
    const response = await axiosInstance.post(
      API_CONFIG.REGISTER_ENDPOINT,
      data
    );
    return response.data.user;
  },

  logout: async (): Promise<void> => {
    await axiosInstance.post(API_CONFIG.LOGOUT_ENDPOINT);
  },

  getSession: async (): Promise<User | null> => {
    try {
      const response = await axiosInstance.get(API_CONFIG.SESSION_ENDPOINT);
      return response.data.user;
    } catch {
      return null;
    }
  },
};
