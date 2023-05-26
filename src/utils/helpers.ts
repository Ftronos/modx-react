import { remoteBaseUrl } from "./constants";

export const getFullPath = (absolutePath: string) => {
  return remoteBaseUrl + "/" + absolutePath;
};
