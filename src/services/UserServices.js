// import config from "config";

import { loginService } from "../api/AccountAPIServices";
export const userService = {
  login,
  logout,
};

function login(username, password) {
  let auth = {
    Username: username,
    Password: password,
  };
  return (
    loginService(auth)
      // .then(handleResponse)
      .then((res) => {
        console.log(res.data.token);
        if (res && res.data) {
          auth.token = res.data.token;
          delete auth.Password;
          localStorage.setItem("user", JSON.stringify(auth));
        } else if (res.data.message) {
          throw `${res.data.message}`;
        }
        return auth;
      })
      .catch((error) => {
        throw `${error.response.data.message}`;
        // console.log(error);
      })
  );
}

function logout() {
  //TODO: call actual API
  localStorage.removeItem("user");
}
