export interface Instrument {
  id: string;
  name: string;
  exchange: string;
  type: string;
  tickSize: number;
  tickValue: number;
}

export const DEFAULT_INSTRUMENTS: Instrument[] = [];

export const getInstrumentTypeStyle = (type: string) => {
  switch (type) {
    case "Derivatives":
      return "derivatives";
    case "Equity Futures":
      return "equity-futures";
    case "Commodity Futures":
      return "commodity-futures";
    case "Cryptocurrency Futures":
      return "cryptocurrency-futures";
    case "Spot Forex":
      return "spot-forex";
    case "Options on Futures":
      return "options-on-futures";
    case "Spot Metal":
      return "spot-metal";
    default:
      return "";
  }
};
