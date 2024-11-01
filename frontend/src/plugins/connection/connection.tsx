import Widget from "../widget";
import { getState } from "../../lib/link";

import './connection.css';
import { useEffect, useState } from "react";

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
    <Widget title={"Connection Status"} defaultWidth={225} defaultHeight={100} minWidth={225} minHeight={100} maxWidth={225} maxHeight={200}>
      {isConnected ? (
        <div className="online">Online</div>
      ) : (
        <div className="offline">Offline</div>
      )}
    </Widget>
  )
}

export default Connection;
