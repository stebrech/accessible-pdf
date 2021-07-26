import "./src/styles/reset.css"
import "./src/styles/global.module.css"
import "./src/styles/accessibility.css"
import "./src/styles/general.css"
import { useIntl } from "react-intl"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    useIntl.formatMessage({ id: "sw.outdated" })
  )
  if (answer === true) {
    window.location.reload()
  }
}