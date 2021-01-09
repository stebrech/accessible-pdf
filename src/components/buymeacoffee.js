import React from "react"
import { useIntl } from "react-intl"

import style from "./buymeacoffee.module.css"

const Coffee = () => {
  
  const intl = useIntl()

  return(
    <aside className={style.coffee}>
      <img src="/images/bmc.svg" alt="" className={style.logoBmc} />
      <p>
        {intl.formatMessage({ id: "coffee.question" })}
      </p>
      <p>
        <a href="https://www.buymeacoffee.com/pixelstrolch" className={style.link}>
          {intl.formatMessage({ id: "coffee.link" })}
        </a>
      </p>
    </aside>
  )
}

export default Coffee
