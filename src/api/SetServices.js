import { DbApi } from "./index";
// let key = "9c41a480-edc2-4715-83ef-508abef38f2d";

// export const getCategories = () => {
//   let url = "/category";
//   return DbApi.get(url);
// };

export const getSetById = (id) => {
  let url = "/set/" + id;
  return DbApi.get(url);
};
