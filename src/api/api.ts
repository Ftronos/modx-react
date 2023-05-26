import axios, { AxiosResponse, HttpStatusCode } from "axios";
import { resource_type } from "types";
import { remoteApiUrl } from "utils/constants";

const instance = axios.create({
  withCredentials: false,
  baseURL: remoteApiUrl,
  headers: {},
});

type articlesApi_getMenu_type = {
  results: Array<resource_type>;
  total: number;
};
export const articlesApi = {
  getArticles() {
    return instance
      .get("/articles/")
      .then((response: AxiosResponse<articlesApi_getMenu_type>) => response.data);
  },
};

type appApi_getPage_type = {
  success: boolean;
  message: string;
  object: resource_type;
  code: HttpStatusCode;
};
type appApi_getMenu_type = {
  results: Array<resource_type>;
  total: number;
};
export const appApi = {
  getHeaderMenu() {
    return instance
      .get("/menu/")
      .then((response: AxiosResponse<appApi_getMenu_type>) => response.data);
  },

  getMainPage() {
    return instance
      .get(`/main/`)
      .then((response: AxiosResponse<appApi_getPage_type>) => response.data);
  },

  getPage(uri: string) {
    return instance
      .get(`/resources/?uri=${uri}`)
      .then((response: AxiosResponse<appApi_getPage_type>) => response.data);
  },
};
