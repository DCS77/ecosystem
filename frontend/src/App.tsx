import GridLayout from "react-grid-layout";
import MenuBar from './core/menu_bar/menu_bar';
import Connection from './core/connection/connection';
import MarketData from './plugins/market_data/market_data';
import MarketDataManager from "./plugins/market_data_manager/market_data_manager";
import { Instrument } from "./lib/instruments/instrument";
import { useLocalStorage } from "./lib/local_storage/local_storage";

import './App.css';

function App() {
  const [marketDataInstruments, setMarketDataInstruments] = useLocalStorage<Instrument[]>("marketDataInstruments", []);

  const layout = [
    { i: "connection", x: 0, y: 0, w: 10, h: 3, minW: 10, maxW: 10, minH: 3, maxH: 3, isResizable: false },
    { i: "market-data-manager", x: 10, y: 0, w: 20, h: 35, minW: 12, maxW: 20, minH: 10, maxH: 35, isResizable: true },
  ];

  const marketDataLayout = { x: 0, y: 0, w: 10, h: 10, minW: 10, maxW: 20, minH: 10, maxH: 30, isResizable: true };

  const addMarketDataInstrument = (instrument: Instrument) => {
    setMarketDataInstruments([...marketDataInstruments, instrument]);
  }

  return (
    <>
      <MenuBar title="Ecosystem UI" version="0.1" items={[]} />
      <GridLayout
        className="layout"
        layout={layout}
        cols={50}
        rowHeight={10}
        width={1200}
        draggableHandle=".handle"
      >
        <div key="connection"><Connection /></div>
        <div key="market-data-manager"><MarketDataManager addMarketDataInstrument={addMarketDataInstrument} /></div>

        {marketDataInstruments.map((instrument, i) =>
          <div key={i} data-grid={marketDataLayout}><MarketData instrument={instrument} /></div>
        )}
      </GridLayout>
    </>
  )
}

export default App;
