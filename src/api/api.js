import axios from "axios";

const instance = axios.create({
  withCredentials: false,
  crossDomain: true,
  baseURL: "https://factorial.bratslavsky.ru/rest",
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
