import { authHeader } from "../services/auth-header";
import { DbApi } from "./index";

export const getUser = () => {
  let url = `user/`;
  const token = "Bearer " + authHeader();
  return DbApi.get(url, { headers: { Authorization: token } });
};
export const loginService = (user) => {
  // console.log(user);
  let url = `user/authenticate`;
  return DbApi.post(url, user);
};

export const registerService = (user) => {
  let url = `user/register`;
  return DbApi.post(url, user);
};
