import './style.css'
import ReactLogo from './react.png'
import Logo from './logo.svg'
import { ClickCounter } from './ClickCounter'
export const App = () => {
  return (
    <>
      <h1>
        VT Tech React First Type Script - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img alt="React logo" src={ReactLogo} width="10%" height="10%" />
      <img alt="Logo" src={Logo} width="10%" height="10%" />
      <ClickCounter />
    </>
  )
}
