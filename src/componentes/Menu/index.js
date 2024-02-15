import { Link } from "react-router-dom"
import styles from "./menu.module.css"
import MenuLink from "./MenuLink";

export default function Menu() {

  // 06:59 https://cursos.alura.com.br/course/React-desenvolvendo-react-router-javaScript/task/112263

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to='/'> Inicio </MenuLink>

        <MenuLink to='/sobremim'> Sobre Mim </MenuLink>
      </nav>
    </header>
  )
}