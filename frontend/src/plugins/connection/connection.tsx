import Widget from "../widget";
import { isConnected } from "../../lib/link";

import './connection.css';

function Connection() {
  return (
    <Widget title={"Connection Status"} defaultWidth={225} defaultHeight={100} minWidth={225} minHeight={100} maxWidth={225} maxHeight={200}>
      {isConnected() ? (
        <div className="online">Online</div>
      ) : (
        <div className="offline">Offline</div>
      )}
    </Widget>
  )
}

export default Connection;
