import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    Accept: "application/json;charset=UTF-8",
  },
});

export const requestData = async (endpoint: string) => {
  const { data } = await instance.get(endpoint);

  return data;
};

export const requestLogin = async (email: string, password: string) => {
  const body = { email, password };
  const { data } = await instance.post("/users/auth/login", body);

  return data;
};
