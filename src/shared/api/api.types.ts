import { InternalAxiosRequestConfig } from "axios";

export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: "user" | "predictor" | "admin";
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface QueueItem {
  resolve: (value: unknown) => void;
  reject: (reason?: any) => void;
  config: InternalAxiosRequestConfig;
}
