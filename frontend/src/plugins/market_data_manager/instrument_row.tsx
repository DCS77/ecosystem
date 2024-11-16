import { PropsWithChildren } from 'react';
import { getInstrumentTypeStyle, Instrument } from '../../lib/instruments/instrument';

import './market_data_manager.css';

export interface InstrumentRowProps {
  instrument: Instrument;
  addMarketDataInstrument: (instrument: Instrument) => void;
}

function InstrumentRow(props: PropsWithChildren<InstrumentRowProps>) {
  return (
    <div className="instrument-row">
      <span className="group">
        <span className={`type ${getInstrumentTypeStyle(props.instrument.type)}`}>{props.instrument.type}</span>
        <span className={`id ${getInstrumentTypeStyle(props.instrument.type)}`}>{props.instrument.id}</span>
        <span>{props.instrument.name}</span>
      </span>
      <span className="group">
        <button onClick={() => props.addMarketDataInstrument(props.instrument)}>⊕</button>
      </span>
    </div>
  )
}

export default InstrumentRow;
