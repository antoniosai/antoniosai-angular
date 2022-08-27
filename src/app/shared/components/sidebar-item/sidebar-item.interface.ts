export interface MenuChild {
  link: string;
  title: string;
}

export interface MenuList {
  title: string;
  icon: string;
  link: string;
  children: MenuChild[],
}