import { MenuStyle } from './style'
import { MenuProps } from '../interfaces'
import { useContext } from 'react'
import { ProjectsContext } from '../../../providers/ProjectsContext'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const Menu = ({ isActive, menuRef, setIsActive }: MenuProps) => {
  const { switchTheme, switchedTheme } = useContext(ProjectsContext)

  return (
    <MenuStyle
      isActive={isActive}
      ref={menuRef}
      onClick={() => setIsActive(false)}
    >
      <a href="#home" className="home_link scroll-to-target">
        Início
      </a>

      <a href="#contact" className="contact_link scroll-to-target">
        Contato
      </a>

      <a href="#projects" className="projects_link scroll-to-target">
        Projetos
      </a>

      <button
        onClick={switchTheme}
        title={
          switchedTheme === 'dark' ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'
        }
      >
        {switchedTheme === 'light' ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </button>
    </MenuStyle>
  )
}

export default Menu
