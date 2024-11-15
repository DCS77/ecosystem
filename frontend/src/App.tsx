import Connection from './plugins/connection/connection';
import GridLayout from "react-grid-layout";
import MenuBar from './components/menuBar';

import './App.css';

function App() {
  const layout = [
    { i: "connection", x: 0, y: 0, w: 2.5, h: 2.5, minW: 2.5, maxW: 2.5, minH: 2.5, maxH: 2.5, isResizable: false },
  ];

  return (
    <>
      <MenuBar title="Ecosystem UI" version="0.1" items={[]} />
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        draggableHandle=".handle"
      >
        <div key="connection">
          <Connection />
        </div>
      </GridLayout>
    </>
  )
}

export default App;
