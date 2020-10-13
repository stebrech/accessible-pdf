import React from "react"
import { Link } from "gatsby"

import style from "./mainnav.module.css"

const MainNav = () => {

  return (
    <nav className={style.navigation}>
      <ul>
        <li>
          <Link activeClassName="active" to={`/`}>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav