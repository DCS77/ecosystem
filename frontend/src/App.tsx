import GridLayout from "react-grid-layout";
import MenuBar from './core/menu_bar/menu_bar';
import Connection from './core/connection/connection';
import MarketData from './plugins/market_data/market_data';

import './App.css';

function App() {
  const layout = [
    { i: "connection", x: 0, y: 0, w: 10, h: 3, minW: 10, maxW: 10, minH: 3, maxH: 3, isResizable: false },
    { i: "market-data", x: 0, y: 0, w: 10, h: 10, minW: 10, maxW: 20, minH: 10, maxH: 30, isResizable: true },
  ];

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
        <div key="market-data"><MarketData /></div>
      </GridLayout>
    </>
  )
}

export default App;
