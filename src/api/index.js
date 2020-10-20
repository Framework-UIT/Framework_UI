import axios from "axios";
let key = "6683b509-bbf1-4d1c-9dce-6bf21a5eba11";
export const instanceAPI = axios.create({
  params: { key: key },
  baseURL: "https://www.dictionaryapi.com/api/v3/references/sd4/json/",
  timeout: 500,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const DbApi = axios.create({
  baseURL: "https://localhost:3838/api/",
  timeout: 500,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=utf-8",
  },
});
