import classes from './header.module.css'
import { Menu } from './menu'
import { Brand } from '../brand'

//

const ReactLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.23174 23 20.46348"
    height="50"
    className={ classes.reactLogo }
  >
    <title>React Logo</title>
    <circle cx="0" cy="0" r="2.05" fill="var(--color-renci)"/>
    <g stroke="var(--color-renci)" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
)

export const Header = ({ menuLinks }) => {
  return (
    <header className={ classes.appHeader }>
      <div className={ classes.overlay }>
        <ReactLogo />
        <Brand size="medium" />
      </div>
      <Menu options={ menuLinks } />
    </header>
  )
}

Header.propTypes = {
  menuLinks: Menu.propTypes.options,
}
