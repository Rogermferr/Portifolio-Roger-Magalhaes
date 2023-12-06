export interface HeaderStyleProps {
  isActive: boolean;
  pathname: string;
}

export interface MenuProps {
  isActive: boolean;
  menuRef: React.MutableRefObject<any>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HeaderMenuBackgroundProps {
  isActive: boolean;
}
