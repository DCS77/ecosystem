import { PluginInfo } from "../../core/info/info";
import { Instruments } from "../../core/instruments/instrument";
import { get } from "../../lib/backend";

export async function getInfo() {
  return await get<PluginInfo>("plugin/marketdatamanager/info");
}

export async function getInstruments() {
  return await get<Instruments>("plugin/marketdatamanager/instruments");
}
