import { useLocation } from 'react-router-dom'
import { MenuStyle } from './style'
import { MenuProps } from '../interfaces'
import { useContext, useEffect } from 'react'
import { ProjectsContext } from '../../../providers/ProjectsContext'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const Menu = ({ isActive, menuRef, setIsActive }: MenuProps) => {
  const location = useLocation()
  const { hash } = location

  useEffect(() => {
    setIsActive(false)
  }, [hash])

  const { switchTheme, switchedTheme } = useContext(ProjectsContext)

  return (
    <MenuStyle isActive={isActive} ref={menuRef}>
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
