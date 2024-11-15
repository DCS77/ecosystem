import { PropsWithChildren } from 'react';
import './widget.css';

export interface WidgetProps {
  title: string;
}

function Widget(props: PropsWithChildren<WidgetProps>) {
  return (
    <div className="widget">
      <div className="handle"></div>
      <span className="title">{props.title}</span>
      <div className="plugin">
        {props.children}
      </div>
    </div>
  )
}

export default Widget;
