import axios, { AxiosResponse } from "axios";
import { resource_type } from "types";
import { remoteUrl } from "utils/constants";

const instance = axios.create({
  withCredentials: false,
  baseURL: remoteUrl + "/rest",
  headers: {},
});

const responseBody = (response: AxiosResponse) => response.data;

export const articlesApi = {
  getArticles() {
    return instance.get<Array<resource_type>>("/articles/").then(responseBody);
  },

  getArticle(uri: string) {
    return instance.get<resource_type>(`/articles/?uri=articles/${uri}.html`).then(responseBody);
  },
};

export const appApi = {
  getHeaderMenu() {
    return instance.get<Array<resource_type>>("/menu/").then(responseBody);
  },

  getPage(uri: string) {
    return instance.get<resource_type>(`/resources/?uri=${uri}`).then(responseBody);
  },
};
