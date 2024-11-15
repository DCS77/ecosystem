import { PropsWithChildren } from 'react';
import copy from 'copy-to-clipboard';

import './menu_bar.css';

const copyVersion = (version: string) => {
  copy('Ecosystem UI v' + version);
}

export interface MenuButton {
  title: string;
  tooltip: string;
  action: () => void;
}

export interface DropDownItem {
  items: (MenuButton | DropDownItem)[];
}

export type MenuItem = MenuButton | DropDownItem;

export interface MenuBarProps {
  title: string;
  version: string;
  items: MenuItem[];
}

function MenuBar(props: PropsWithChildren<MenuBarProps>) {
  return (
    <div className="bar">
      <span className="menu-text">{props.title}</span>
      <button className="menu-button version-button" onClick={() => copyVersion(props.version)}>
        {props.version}
        <span className="version-clipboard"> Copied!</span>
      </button>
    </div>
  )
}

export default MenuBar;
