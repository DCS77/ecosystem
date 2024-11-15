import { get } from "../../lib/backend";

export async function getInfo() {
  return await get<{
    name: string;
    version: string;
    uptime: number;
  }>("plugin/marketdata/info");
}
