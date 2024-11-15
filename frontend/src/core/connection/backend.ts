import { get } from "../../lib/backend";

export async function getConnectionState() {
  return await get<{ online: boolean }>("connection");
}
