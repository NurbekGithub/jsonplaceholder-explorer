import { instance } from "./config";

export async function getUsers() {
  return instance.get("/users").then(res => res.data);
}
