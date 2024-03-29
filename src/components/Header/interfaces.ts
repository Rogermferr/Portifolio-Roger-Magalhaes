export interface HeaderStyleProps {
  isActive: boolean
}

export interface MenuProps {
  isActive: boolean
  menuRef: React.MutableRefObject<any>
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export interface HeaderMenuBackgroundProps {
  isActive: boolean
}
