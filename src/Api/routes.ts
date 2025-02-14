import axios, { AxiosResponse } from "axios";
import { PaginatedUserResponse, User } from "./@types/user";

// @ts-ignore
const apiUrl = import.meta.env.VITE_API_URL;
//esse bendito env. fica dando erro de tipagem

export const createUser = async (user: User): Promise<AxiosResponse<User>> => {
  return axios.post(`${apiUrl}/users`, user);
};

export const getUsers = async (
  params?: Record<string, string>
): Promise<AxiosResponse<PaginatedUserResponse>> => {
  const queryParams = new URLSearchParams(params).toString();
  return axios.get(`${apiUrl}/users${queryParams ? `?${queryParams}` : ""}`);
};

export const getUserById = async (id: string): Promise<AxiosResponse<User>> => {
  return axios.get(`${apiUrl}/users/${id}`);
};

export const updateUser = async (
  id: string,
  user: Partial<User>
): Promise<AxiosResponse<User>> => {
  return axios.patch(`${apiUrl}/users/${id}`, user);
};

export const deleteUser = async (id: string): Promise<AxiosResponse<void>> => {
  return axios.delete(`${apiUrl}/users/${id}`);
};
