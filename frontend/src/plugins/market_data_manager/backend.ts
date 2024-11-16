import { PluginInfo } from "../../lib/info/info";
import { Instrument } from "../../lib/instruments/instrument";
import { get } from "../../lib/backend";

export async function getInfo() {
  return await get<PluginInfo>("plugin/marketdatamanager/info");
}

export async function getInstruments() {
  return await get<Instrument[]>("plugin/marketdatamanager/instruments");
}
