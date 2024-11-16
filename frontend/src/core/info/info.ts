export interface PluginInfo {
  name: string;
  version: string;
  uptime: number;
}

export const DEFAULT_INFO: PluginInfo = { name: "", version: "", uptime: 0 };
