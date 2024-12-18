import { PropsWithChildren } from 'react';
import './widget.css';

export interface WidgetProps {
  title: string;
  version?: string;
}

function Widget(props: PropsWithChildren<WidgetProps>) {
  return (
    <div className="widget">
      <div className="handle">
        <b>{props.title}</b> {props.version}
      </div>
      <div className="plugin">
        {props.children}
      </div>
    </div>
  )
}

export default Widget;
