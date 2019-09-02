import { instance } from "./config";

export async function getAlbums() {
  return instance.get("/albums").then(res => res.data);
}
