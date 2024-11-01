import { get } from "./backend";

export async function getState() {
  return await get<{ online: boolean }>("state");
}
