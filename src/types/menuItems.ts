export interface IMainMenu {
  menu: {
    locations: string[];
    menuItems: IMenuItems;
    id: string;
  };
}

export interface INode {
  url: string;
  order: number;
  label: string;
  uri: string;
  id: string;
}
export interface IMenuItems {
  nodes: INode[];
}
