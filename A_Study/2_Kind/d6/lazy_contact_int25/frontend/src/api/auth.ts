import axios from "axios";

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axios.post("/api/auth/login", credentials);
  return response.data; // { token, user: { id, name, email } }
};

export const register = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post("/api/auth/register", data);
  return response.data; // { token, user: { id, name, email } }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
