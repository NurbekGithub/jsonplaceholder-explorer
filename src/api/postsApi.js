import { instance } from "./config";

export async function getPosts() {
  return instance.get("/posts").then(res => res.data);
}
