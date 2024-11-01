import { PropsWithChildren, useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';

import './widget.css';

export interface WidgetProps {
  title: string;
  defaultWidth: number;
  defaultHeight: number;
  minWidth: number;
  minHeight: number;
  maxWidth: number;
  maxHeight: number;
}

function Widget(props: PropsWithChildren<WidgetProps>) {
  const [activeDrags, setActiveDrags] = useState(0);

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  const dragHandlers = { onStart: onStart, onStop: onStop };

  return (
    <Draggable
      {...dragHandlers}
      bounds="body"
      handle=".widget > .handle"
      defaultPosition={{ x: 0, y: 0 }}
      grid={[25, 25]}
      scale={1}
    >
      <ResizableBox className="widget box" width={props.defaultWidth} height={props.defaultHeight} draggableOpts={{ grid: [25, 25] }} axis='both'
        minConstraints={[props.minWidth, props.minHeight]} maxConstraints={[props.maxWidth, props.maxHeight]}>
        <>
          <div className="handle"></div>
          <span className="title">{props.title}</span>
          <div>
            {props.children}
          </div>
        </>
      </ResizableBox>
    </Draggable>
  )
}

export default Widget;
