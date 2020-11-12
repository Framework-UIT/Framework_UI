import { DbApi } from "./index";

export const loginService = (user) => {
  console.log(user);
  let url = `user/authenticate`;
  return DbApi.post(url, user);
};

export const registerService = (user) => {
  let url = `user/register`;
  return DbApi.post(url, user);
};
