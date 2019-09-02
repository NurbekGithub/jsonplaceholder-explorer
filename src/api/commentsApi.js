import { instance } from "./config";

export async function getComments() {
  return instance.get("/comments").then(res => res.data);
}
