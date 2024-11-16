import { PropsWithChildren } from 'react';
import { getInstrumentTypeStyle, Instrument } from '../../core/instruments/instrument';

import './market_data_manager.css';

export interface InstrumentRowProps {
  instrument: Instrument;
}

function InstrumentRow(props: PropsWithChildren<InstrumentRowProps>) {
  return (
    <div className="instrument-row">
      <span className="group">
        <span className={`id ${getInstrumentTypeStyle(props.instrument.type)}`}>{props.instrument.id}</span>
        <span>{props.instrument.type}</span>
      </span>
      <span className="group">
        <button>⊕</button>
      </span>
    </div>
  )
}

export default InstrumentRow;
