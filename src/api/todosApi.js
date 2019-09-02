import { instance } from "./config";

export async function getTodos() {
  return instance.get("/todos").then(res => res.data);
}
