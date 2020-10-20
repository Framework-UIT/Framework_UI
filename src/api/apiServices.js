import { instanceAPI, DbApi } from "./index";
// let key = "9c41a480-edc2-4715-83ef-508abef38f2d";
export const getCardData = (word) => {
  let url = "/" + word;
  return instanceAPI.get(url);
};

export const getAllCardsFromDb = () => {
  let url = "/cards";
  return DbApi.get(url);
};

export const getCardById = (id) => {
  let url = "/cards/" + id;
  return DbApi.get(url);
};
