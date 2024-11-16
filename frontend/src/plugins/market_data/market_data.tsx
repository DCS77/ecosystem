import Widget from "../../core/widget/widget";
import { getInfo } from "./backend";
import { Instrument } from "../../lib/instruments/instrument";
import { DEFAULT_INFO } from "../../lib/info/info";
import { PropsWithChildren, useEffect, useState } from "react";

import './market_data.css';

const NAME: string = "MD";
const VERSION: string = "0.1";

export interface MarketDataProps {
  instrument: Instrument;
}

function MarketData(props: PropsWithChildren<MarketDataProps>) {
  const [info, setInfo] = useState(DEFAULT_INFO);

  const updateInfo = async () => {
    getInfo().then(info => {
      setInfo(info);
    }).catch(error => {
      console.error("getInfo", { error });
      setInfo(DEFAULT_INFO);
    });
  };

  useEffect(() => {
    updateInfo();
  }, []);

  return (
    <Widget title={`${NAME}. ${props.instrument.id}`} version={`F${VERSION}-B${info.version}`}>
      <div className="content">
        <div>{info.uptime}</div>
      </div>
    </Widget>
  )
}

export default MarketData;
