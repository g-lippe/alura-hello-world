import { Link, NavLink } from "react-router-dom"
import styles from './menuLink.module.css';

export default function MenuLink({ children, to }) {
  // const localizacao = useLocation();

  return (

    <NavLink
      to={to}
      className={({ isActive }) => `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ""}
      `}
    >
      {children}
    </NavLink>

  )

}