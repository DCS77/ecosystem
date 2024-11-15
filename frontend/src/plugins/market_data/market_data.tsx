import Widget from "../../core/widget/widget";
import { getInfo } from "./backend";
import { useEffect, useState } from "react";

import './market_data.css';

function MarketData() {
  const [info, setInfo] = useState({
    name: "",
    version: "",
    uptime: 0,
  });

  const updateInfo = async () => {
    getInfo().then(info => {
      console.log(info);
      setInfo(info);
    }).catch(error => {
      console.error("getStatus", { error });
      setInfo({
        name: "",
        version: "",
        uptime: 0,
      });
    });
  };

  useEffect(() => {
    updateInfo();
  }, []);

  return (
    <Widget title={info.name} version={info.version}>
      <div className="info">
        <div>{info.uptime}</div>
      </div>
    </Widget>
  )
}

export default MarketData;
