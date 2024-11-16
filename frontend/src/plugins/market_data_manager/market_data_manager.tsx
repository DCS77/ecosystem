import Widget from "../../core/widget/widget";
import { getInfo, getInstruments } from "./backend";
import { DEFAULT_INFO } from "../../core/info/info";
import { DEFAULT_INSTRUMENTS } from "../../core/instruments/instrument";
import { useEffect, useState } from "react";

import './market_data_manager.css';
import InstrumentRow from "./instrument_row";

const NAME: string = "MD Manager";
const VERSION: string = "0.1";

function MarketDataManager() {
  const [info, setInfo] = useState(DEFAULT_INFO);
  const [instruments, setInstruments] = useState(DEFAULT_INSTRUMENTS);

  const updateInfo = async () => {
    getInfo().then(info => {
      setInfo(info);
    }).catch(error => {
      console.error("getInfo", { error });
      setInfo(DEFAULT_INFO);
    });
  };

  const updateInstruments = async () => {
    getInstruments().then(instruments => {
      console.log(instruments);
      setInstruments(instruments);
    }).catch(error => {
      console.error("getInstruments", { error });
      setInstruments(DEFAULT_INSTRUMENTS);
    });
  };

  useEffect(() => {
    updateInfo();
    updateInstruments();
  }, []);

  return (
    <Widget title={NAME} version={`F${VERSION}-B${info.version}`}>
      <div className="content">
        {instruments.map((instrument, i) =>
          <InstrumentRow key={i} instrument={instrument} />
        )}
      </div>
    </Widget>
  )
}

export default MarketDataManager;