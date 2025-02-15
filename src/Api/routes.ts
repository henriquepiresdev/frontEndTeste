import { PaginatedUserResponse, User } from "./@types/user";
import axios, { AxiosResponse } from "axios";

// @ts-ignore
const apiUrl = import.meta.env.VITE_API_URL;
//esse bendito env. fica dando erro de tipagem
export const createUser = async (
  user: Omit<User, "id" | "createdAt" | "updatedAt">
): Promise<AxiosResponse<User>> => {
  return axios.post(`${apiUrl}/users`, user);
};

export const getUsers = async ({
  page,
  limit,
  isSelected,
}: {
  page: string;
  limit: string;
  isSelected?: boolean;
}): Promise<PaginatedUserResponse> => {
  const params = new URLSearchParams();

  params.append("page", page);
  params.append("limit", limit);

  if (isSelected !== undefined) {
    params.append("isSelected", String(isSelected));
  }

  const response: AxiosResponse<PaginatedUserResponse> = await axios.get(
    `${apiUrl}/users?${params.toString()}`
  );
  return response.data;
};

export const getUserById = async (id: string): Promise<AxiosResponse<User>> => {
  return axios.get(`${apiUrl}/users/${id}`);
};

export const updateUser = async (
  id: number,
  user: Partial<User>
): Promise<AxiosResponse<User>> => {
  return axios.patch(`${apiUrl}/users/${id}`, user);
};

export const deleteUser = async (id: string): Promise<AxiosResponse<void>> => {
  return axios.delete(`${apiUrl}/users/${id}`);
};
