import Widget from "../widget";
import { getState } from "../../lib/link";
import { useEffect, useState } from "react";

import './connection.css';

function Connection() {
  const [isConnected, setConnected] = useState(false);

  const updateState = async () => {
    getState().then(state => {
      setConnected(!!state.online);
    }).catch(error => {
      console.error("getStatus", { error });
      setConnected(false);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateState();
    }, 500);

    return () => clearInterval(interval);
  }, [])

  return (
    <Widget title="Connection Status">
      {isConnected ? (
        <div className="online">Online</div>
      ) : (
        <div className="offline">Offline</div>
      )}
    </Widget>
  )
}

export default Connection;
