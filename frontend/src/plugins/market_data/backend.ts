import { PluginInfo } from "../../lib/info/info";
import { get } from "../../lib/backend";

export async function getInfo() {
  return await get<PluginInfo>("plugin/marketdata/info");
}
