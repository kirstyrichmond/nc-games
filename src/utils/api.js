import axios from "axios";

const gamesApi = axios.create({
  baseURL: "http://be-nc-games-app.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    console.log(data, "<<data");
    return data.categories;
  });
};
