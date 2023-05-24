import axios from "axios";
import { remoteUrl } from "constants";

const instance = axios.create({
  withCredentials: false,
  crossDomain: true,
  baseURL: remoteUrl + "/rest",
  headers: {},
});

export const articlesApi = {
  getArticles() {
    return instance.get("/articles/").then((response) => response.data);
  },

  getArticle(uri) {
    return instance.get(`/articles/?uri=articles/${uri}.html`).then((response) => response.data);
  },
};

export const appApi = {
  getHeaderMenu() {
    return instance.get("/menu/").then((response) => response.data);
  },
};
