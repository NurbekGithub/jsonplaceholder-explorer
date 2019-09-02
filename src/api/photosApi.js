import { instance } from "./config";

export async function getPhotos() {
  return instance.get("/photos").then(res => res.data);
}
